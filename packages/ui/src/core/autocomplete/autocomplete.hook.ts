import React, { useRef, useState, useMemo, useCallback, useEffect } from 'react';

import { useDebounce } from '../../hooks/use-debounce';
import { escapeRegExp } from '../../utils/functions';
import type {
  AutocompleteProps,
  AutocompleteOptionType,
  AutocompleteOptionIdType,
  AutocompleteOptionLabelType,
  AutocompleteValueType,
  AutocompleteHookReturn,
  AutocompleteOptionsGroupType,
} from './autocomplete.props';
import type { AnchorElType } from '../menu/menu.props';

export function useAutocomplete(
  props: Partial<AutocompleteProps> & {
    getOptionValue: (option: AutocompleteOptionType) => AutocompleteOptionIdType;
    getOptionLabel: (option: AutocompleteOptionType) => AutocompleteOptionLabelType;
    getOptionDisabled: (option: AutocompleteOptionType) => boolean;
    setMenuJustOpened: React.Dispatch<React.SetStateAction<boolean>>;
  }
): AutocompleteHookReturn {
  const {
    value,
    multiple,
    options = [],
    sortAlphabetically = false,
    getOptionLabel,
    getOptionValue,
    onOpen,
    onChange,
    onClose,
    submitOnBlur,
    getOptionDisabled,
    groupBy,
    closeMenuAfterSelection = true,
    setMenuJustOpened,
  } = props;

  const [anchorEl, setAnchorEl] = useState<AnchorElType>(undefined);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);
  const [focusedMenuItemIndex, setFocusedMenuItemIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const open = Boolean(anchorEl);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const formattedValue = useMemo<AutocompleteValueType>((): AutocompleteValueType => {
    if (multiple) {
      return [...new Set(Array.isArray(value) ? value : [])]; // Format + remove duplications
    }

    return (Array.isArray(value) ? '' : value) || '';
  }, [multiple, value]);

  const isMultiple = Boolean(multiple) && Array.isArray(formattedValue);
  const isValueSelected = isMultiple ? formattedValue.length > 0 : Boolean(formattedValue);

  const optionsList = useMemo<AutocompleteOptionType[]>(() => {
    const nextFilteredOptions = [...(options || [])];

    if (sortAlphabetically) {
      return nextFilteredOptions.sort((a: AutocompleteOptionType, b: AutocompleteOptionType) =>
        getOptionLabel(a).localeCompare(getOptionLabel(b))
      );
    }

    return nextFilteredOptions;
  }, [options, sortAlphabetically]);

  const getOptionById = useCallback(
    (optionId: AutocompleteOptionIdType): AutocompleteOptionType | undefined | null =>
      optionsList.find((option) => getOptionValue(option) === optionId),
    [optionsList]
  );

  const inputValue = useMemo<string>((): string => {
    // When there is searchTerm we should show it in Input
    if (isSearchMode) {
      return searchTerm;
    }
    // If value is array it's shown tags in Input area, hance no need to return anything here so we send empty string
    if (Array.isArray(formattedValue)) {
      return '';
    }

    const selectedOption = getOptionById(formattedValue);

    return selectedOption ? getOptionLabel(selectedOption) : '';
  }, [searchTerm, optionsList, formattedValue, isSearchMode]);

  const checkIsIdSelected = useCallback(
    (optionId: AutocompleteOptionIdType): boolean =>
      isMultiple ? formattedValue.includes(optionId) : formattedValue === optionId,
    [isMultiple, formattedValue]
  );

  const filteredOptions = useMemo<AutocompleteOptionType[]>(
    () =>
      debouncedSearchTerm
        ? optionsList.filter((option) =>
            new RegExp(escapeRegExp(debouncedSearchTerm), 'i').test(getOptionLabel(option))
          )
        : optionsList,
    [optionsList, debouncedSearchTerm]
  );

  const groupedFilteredOptions = useMemo<AutocompleteOptionsGroupType[]>((): AutocompleteOptionsGroupType[] => {
    if (groupBy) {
      const groupedMap = filteredOptions.reduce(
        (accumMap: Map<string, AutocompleteOptionsGroupType>, option: AutocompleteOptionType) => {
          const key = groupBy(option);

          if (!accumMap.has(key)) {
            accumMap.set(key, { options: [], groupedByValue: key });
          }

          accumMap.get(key)?.options?.push(option);

          return accumMap;
        },
        new Map<string, AutocompleteOptionsGroupType>()
      );

      return [...groupedMap].map(([, group]) => group);
    }

    return [{ options: filteredOptions }];
  }, [filteredOptions, groupBy]);

  const handleOpenMenuClick = (event: React.SyntheticEvent<HTMLSpanElement>): void => {
    setAnchorEl(inputRef.current);

    if (onOpen) {
      onOpen(event);
    }
  };

  const handleCloseMenuClick = (
    event?:
      | React.SyntheticEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLDivElement>
  ): void => {
    setAnchorEl(undefined);
    setIsSearchMode(false);
    setFocusedMenuItemIndex(-1);

    if (onClose) {
      onClose(event);
    }
  };

  const handleMenuItemClick = (option: AutocompleteOptionType): void => {
    if (typeof onChange === 'function' && !getOptionDisabled(option)) {
      const id = getOptionValue(option);
      let newValue: AutocompleteValueType = id;

      if (isMultiple) {
        const newValueSet = new Set(formattedValue);
        newValueSet[newValueSet.has(id) ? 'delete' : 'add'](id);
        newValue = [...newValueSet];
      }

      onChange(newValue);

      if (!isMultiple || closeMenuAfterSelection) {
        handleCloseMenuClick();
      } else {
        setIsSearchMode(false);
      }
    }
  };

  const handleChangeSearchTerm = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    setSearchTerm(event.currentTarget.value);
    setAnchorEl(inputRef.current);
    setIsSearchMode(true);
  };

  const handleOnBlur = (): void => {
    if (submitOnBlur) {
      submitOnBlur();
    }

    setIsSearchMode(false);
    setAnchorEl(undefined);
  };

  const handleOnRemoveItem = (
    event: React.SyntheticEvent<HTMLElement> | React.MouseEvent<SVGSVGElement>,
    optionId: AutocompleteOptionIdType
  ): void => {
    event.stopPropagation();

    if (isMultiple && onChange) {
      const newValueSet = new Set(formattedValue);
      newValueSet[newValueSet.has(optionId) ? 'delete' : 'add'](optionId);

      onChange([...newValueSet]);
    }

    handleOnBlur();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    // When menu is open we handle select with arrow keys
    if (open) {
      if (event.key === 'ArrowDown') {
        const nextIndex = focusedMenuItemIndex + 1;
        setFocusedMenuItemIndex(nextIndex >= filteredOptions.length ? 0 : nextIndex);
        setMenuJustOpened(false);
      } else if (event.key === 'ArrowUp') {
        const prevIndex = focusedMenuItemIndex - 1;
        setFocusedMenuItemIndex(prevIndex < 0 ? filteredOptions.length - 1 : prevIndex);
        setMenuJustOpened(false);
      } else if (event.key === 'Enter' && focusedMenuItemIndex >= 0) {
        const option = filteredOptions[focusedMenuItemIndex];
        handleMenuItemClick(option);
      } else if (event.key === 'Escape') {
        handleCloseMenuClick(event);
      }
    }
  };

  const handleClearIconClick = (): void => {
    if (onChange) {
      onChange(isMultiple ? [] : '');
    }
  };

  const handleSelectAllOptions = (): void => {
    if (isMultiple && onChange) {
      const allOptionIds = optionsList.reduce<AutocompleteOptionIdType[]>((acc, option) => {
        if (!getOptionDisabled(option)) {
          acc.push(getOptionValue(option));
        }
        return acc;
      }, []);

      onChange([...allOptionIds]);
    }
  };

  useEffect(() => {
    if (!isSearchMode) {
      setSearchTerm('');
    }
  }, [isSearchMode]);

  useEffect(() => {
    if (open) {
      // If multiple, set setFocusedMenuItemIndex to the last selected value's index
      if (isMultiple) {
        let lastSelectedIndex = -1;

        formattedValue.forEach((value) => {
          const index = filteredOptions.findIndex((option) => getOptionValue(option) === value);

          if (index !== -1) {
            lastSelectedIndex = index;
          }
        });

        setFocusedMenuItemIndex(lastSelectedIndex >= 0 ? lastSelectedIndex : -1);
      } else {
        // If single, set setFocusedMenuItemIndex to the selected value's index
        const selectedIndex = filteredOptions.findIndex((option) => getOptionValue(option) === formattedValue);
        setFocusedMenuItemIndex(selectedIndex >= 0 ? selectedIndex : -1);
      }
    }
  }, [open, formattedValue, filteredOptions, multiple, getOptionValue]);

  return {
    formattedValue,
    filteredOptions,
    groupedFilteredOptions,
    optionsList,
    inputRef,
    inputValue,
    isValueSelected,
    open,
    anchorEl,
    searchTerm,
    handleMenuItemClick,
    handleOpenMenuClick,
    handleChangeSearchTerm,
    handleCloseMenuClick,
    checkIsIdSelected,
    getOptionById,
    handleOnRemoveItem,
    handleOnBlur,
    handleKeyDown,
    handleClearIconClick,
    handleSelectAllOptions,
    focusedMenuItemIndex,
    setMenuJustOpened,
  };
}
