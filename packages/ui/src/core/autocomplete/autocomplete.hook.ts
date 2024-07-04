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
  } = props;
  const [anchorEl, setAnchorEl] = useState<AnchorElType>(undefined);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const open = Boolean(anchorEl);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (!isSearchMode) {
      setSearchTerm('');
    }
  }, [isSearchMode]);

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

    if (onClose) {
      onClose(event);
    }
  };

  const handleMenuItemClick = (option: AutocompleteOptionType) => (): void => {
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
    if (open) {
      // TODO: Check do we need this
      // if (event.key === 'ArrowUp') {
      //   if (currentItemIndex > 0) {
      //     getNextAvailableOption(currentItemIndex - 1, event.key);
      //   } else {
      //     getNextAvailableOption(filteredOptions.length - 1, event.key);
      //   }
      // }

      // if (event.key === 'ArrowDown') {
      //   if (currentItemIndex < filteredOptions.length - 1) {
      //     getNextAvailableOption(currentItemIndex + 1, event.key);
      //   } else {
      //     getNextAvailableOption(0, event.key);
      //   }
      // }

      // if (event.key === 'Enter' && currentItemIndex >= 0) {
      //   const selectedOption = filteredOptions[currentItemIndex];

      //   if (typeof selectedOption === 'string') {
      //     handleSelectedItem(event, selectedOption, -1, getOptionIndex(selectedOption));
      //   } else {
      //     handleSelectedItem(
      //       event,
      //       getOptionLabel(selectedOption),
      //       getOptionValue(selectedOption),
      //       getOptionIndex(getOptionLabel(selectedOption))
      //     );
      //   }
      // }

      if (event.key === 'Escape') {
        handleCloseMenuClick(event);
      }
    }
  };

  const handleClearIconClick = (): void => {
    if (onChange) {
      onChange(isMultiple ? [] : '');
    }
  };

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
  };
}
