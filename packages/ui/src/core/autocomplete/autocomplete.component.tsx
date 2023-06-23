import React, { useRef, useEffect, useState } from 'react';
import PT, { Validator } from 'prop-types';
import Cross from '@scaleflex/icons/cross';
import Tick from '@scaleflex/icons/tick';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { AutocompleteProps, AutocompleteObjectOptionstype } from './autocomplete.props';
import { propTypes as labelPropTypes } from '../label/label.component';
import { propTypes as inputPropTypes } from '../input/input.component';
import type { InputProps } from '../input';
import type { LabelProps } from '../label';
import type { AnchorElType } from '../menu/menu.props';
import Label from '../label';
import FormHint from '../form-hint';
import ArrowTick from '../arrow-tick';
import Input from '../input';
import Menu from '../menu';
import Tag from '../tag';
import MenuItem, { MenuItemActions } from '../menu-item';
import { InputSize } from '../../utils/types';
import { Size } from '../menu-item/types';
import Styled from './autocomplete.styles';

const Autocomplete = intrinsicComponent<AutocompleteProps, HTMLDivElement>(
  (
    {
      children,
      MenuProps,
      LabelProps: LabelPropsData,
      InputProps: InputPropsData,
      error,
      label,
      hint,
      value,
      noOptionsText = 'No options',
      focusOnOpen,
      onChange,
      onOpen,
      onClose,
      getOptionDisabled,
      multiple,
      size,
      disabled,
      scroll,
      readOnly,
      options,
      placeholder,
      fullWidth,
      ...rest
    },
    ref
  ): JSX.Element => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [selected, setSelected] = useState<string[] | string>(multiple ? [] : '');
    const [filteredOptions, setFilteredOptions] = useState<string[] | AutocompleteObjectOptionstype[]>(options);
    const [anchorEl, setAnchorEl] = useState<AnchorElType>(undefined);
    const [currentItemIndex, setCurrentItemIndex] = useState<number>(-1);
    const [renderedValue, setRenderedValue] = useState(value);

    const open = Boolean(anchorEl);
    const isItemSelected = selected.length > 0;

    const getFilteredItems = (items: any[], callBackFun: any): any[] => {
      const filteredItems: any[] = [];
      items.forEach((item: any) => callBackFun(item) && filteredItems.push(item));

      return filteredItems;
    };

    const handleOnChange = (event: any, val: any): void => {
      if (multiple) {
        if (onChange) {
          onChange(event, [...selected, val]);
        }
      } else {
        if (onChange) {
          onChange(event, val);
        }
        setSelected('');
        setCurrentItemIndex(-1);
      }
    };

    const handleOnRemoveItem = (event: any, itemIndex: number): void => {
      event.stopPropagation();
      const updatedSelectedItems = Array.isArray(selected)
        ? selected.filter((_, index: number) => index !== itemIndex)
        : '';
      setSelected(updatedSelectedItems);

      if (onChange) {
        onChange(event, [...updatedSelectedItems, '']);
      }
    };

    const handleOpenClick = (event: any): void => {
      setAnchorEl(inputRef.current);
      if (onOpen) {
        onOpen(event);
      }
    };

    const handleCloseClick = (
      event: React.SyntheticEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
    ): void => {
      setAnchorEl(undefined);
      setCurrentItemIndex(-1);
      if (onClose) {
        onClose(event);
      }
    };

    const handleClearIconClick = (event: any): void => {
      event?.stopPropagation();
      if (multiple) {
        if (onChange) {
          onChange(event, []);
        }
        setSelected([]);
      } else {
        if (onChange) {
          onChange(event, '');
        }
        setSelected('');
      }

      setCurrentItemIndex(-1);
    };

    const handleSelectedItem = (
      event: React.KeyboardEvent<HTMLInputElement> | React.SyntheticEvent<HTMLInputElement>,
      item: string
    ): void => {
      // make sure this item isn't already selected
      if (!multiple && selected !== item) {
        handleOnChange(event, item);
        setSelected(item);
      } else if (multiple) {
        if (Array.isArray(selected) && selected.includes(item)) {
          const updatedSelectedItems = selected.filter((selectedItem) => selectedItem !== item);
          setSelected(updatedSelectedItems);

          if (onChange) {
            onChange(event, [...updatedSelectedItems, '']);
          }
        } else {
          handleOnChange(event, '');
          setSelected((prev) => [...prev, item]);
        }
      }

      handleCloseClick(event);
    };

    const handleMenuItemClick = (event: any, item: string, index: number): void => {
      // menu item shouldn't be clickable if it's disabled or = 'No options'
      if (item === noOptionsText || (getOptionDisabled && getOptionDisabled(item, index))) {
        return undefined;
      }

      return handleSelectedItem(event, item);
    };

    const getValue = (): string | string[] => {
      if (multiple) {
        const inputValue = value[value.length - 1];
        return value.length !== 0 ? inputValue : '';
      }

      return value;
    };

    const handleInputChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
      setRenderedValue('');
      handleOnChange(event, event.currentTarget.value);
      setAnchorEl(inputRef.current);
    };

    const getOptionIndex = (option: any): number => {
      let optionIndex = -1;

      if (typeof options[0] === 'object') {
        const optionObject = Object.entries(options).find(([_, optObject]) => optObject.label === option);

        if (optionObject) {
          optionIndex = Number(optionObject[0]);
        }
      } else {
        optionIndex = options.indexOf(option);
      }

      return optionIndex;
    };

    const getNextAvailableOption = (currentIndex: number, direction: string): void => {
      while (currentIndex !== currentItemIndex) {
        const selectedOption = filteredOptions[currentIndex];
        const optionIndex = getOptionIndex(selectedOption);
        let isDisabled = false;

        if (getOptionDisabled && typeof selectedOption === 'string') {
          isDisabled = getOptionDisabled(selectedOption, optionIndex);
        }

        if (!isDisabled) {
          setCurrentItemIndex(currentIndex);
          break;
        }

        if (direction === 'ArrowUp') {
          if (currentIndex === 0) {
            currentIndex = filteredOptions.length;
          }
          currentIndex -= 1;
        }

        if (direction === 'ArrowDown') {
          if (currentIndex === filteredOptions.length - 1) {
            currentIndex = -1;
          }
          currentIndex += 1;
        }
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
      if (open) {
        if (event.key === 'ArrowUp') {
          if (currentItemIndex > 0) {
            getNextAvailableOption(currentItemIndex - 1, event.key);
          } else {
            getNextAvailableOption(filteredOptions.length - 1, event.key);
          }
        }

        if (event.key === 'ArrowDown') {
          if (currentItemIndex < filteredOptions.length - 1) {
            getNextAvailableOption(currentItemIndex + 1, event.key);
          } else {
            getNextAvailableOption(0, event.key);
          }
        }

        if (event.key === 'Enter' && currentItemIndex >= 0) {
          const selectedOption = filteredOptions[currentItemIndex];

          if (typeof selectedOption === 'string') {
            handleSelectedItem(event, selectedOption);
          }
        }

        if (event.key === 'Escape') {
          handleCloseClick(event);
        }
      }
    };

    const getMultipleFilteredOptions = (): void => {
      let filteredMenuOptions = [];

      if (isItemSelected) {
        // lastValue = selectedItem | enteredValue
        // ["item1","ite"]
        const lastValue = value[value.length - 1];
        filteredMenuOptions = getFilteredItems(options, (item: any) => {
          if (item.includes(lastValue || '')) return true;

          return false;
        });
      } else {
        // filter menu options based on the value[0] as it's an array in multiple mode
        filteredMenuOptions = getFilteredItems(options, (item: any) => {
          if (item.includes(value[0] || '')) return true;

          return false;
        });
      }

      setFilteredOptions(filteredMenuOptions);
    };

    const getFilteredOptions = (): void => {
      let filteredMenuOptions = typeof options[0] === 'object' ? options.map((option: any) => option.label) : options;

      if (!isItemSelected && value !== renderedValue) {
        filteredMenuOptions = filteredMenuOptions.filter((option: any) => option.includes(value));
      }

      setFilteredOptions(filteredMenuOptions || []);
    };

    const renderLabel = (): string | number | null | JSX.Element | any => {
      if (label) {
        if (typeof label === 'function') {
          return label({ error });
        }

        if (typeof label === 'object') {
          return label;
        }

        return (
          <Label size={size} error={error} {...(LabelPropsData || {})}>
            {label}
          </Label>
        );
      }

      return null;
    };

    const renderTags = (): JSX.Element[] | JSX.Element | boolean | undefined => {
      if (multiple && isItemSelected && Array.isArray(selected)) {
        return selected.map((item: string, index: number) => (
          <Tag key={index} tagIndex={index} crossIcon onRemove={(_, event) => handleOnRemoveItem(event, index)}>
            {item}
          </Tag>
        ));
      }
    };

    const renderHint = (): string | number | null | JSX.Element | any => {
      if (hint) {
        if (typeof hint === 'function') {
          return hint({ error });
        }

        if (typeof hint === 'object') {
          return hint;
        }

        return (
          <FormHint size={size} error={error}>
            {hint}
          </FormHint>
        );
      }

      return null;
    };

    const renderMenuItem = (item: string, index: number): any => {
      const optionIndex = getOptionIndex(item);
      const miActions = (
        <MenuItemActions>
          <Styled.TickIcon>
            <Tick size={12} />
          </Styled.TickIcon>
        </MenuItemActions>
      );

      return (
        <MenuItem
          key={optionIndex}
          value={item}
          size={size}
          noOptionsText={item === noOptionsText}
          disabled={getOptionDisabled && getOptionDisabled(item, optionIndex)}
          active={item === selected || index === currentItemIndex || (multiple && selected.includes(item))}
          onClick={(event: React.MouseEvent<HTMLDivElement>) => handleMenuItemClick(event, item, optionIndex)}
          enableScrollIntoView
        >
          {item}
          {(item === selected || (multiple && selected.includes(item))) && miActions}
        </MenuItem>
      );
    };

    useEffect(() => {
      if (focusOnOpen) setAnchorEl(inputRef.current);
    }, [focusOnOpen]);

    useEffect(() => {
      if (isItemSelected) {
        filteredOptions.map((option: any, index: number) => {
          if (option === selected) {
            setCurrentItemIndex(index);
          }
          return null;
        });
      }
    }, [anchorEl]);

    useEffect(() => {
      if (multiple) {
        getMultipleFilteredOptions();
      } else {
        getFilteredOptions();
      }
    }, [value, anchorEl]);

    useEffect(() => {
      if (filteredOptions?.length === 0) {
        setFilteredOptions([noOptionsText]);
      }
    }, [filteredOptions, value]);

    useEffect(() => {
      const filteredMenuOptions = typeof options[0] === 'object' ? options.map((option: any) => option.label) : options;

      if (!multiple && value?.length !== 0) {
        const valueOptionIndex = filteredMenuOptions.findIndex((option: any) => option === value);

        if (valueOptionIndex !== -1) {
          setCurrentItemIndex(valueOptionIndex);
          setSelected(value);
        }
      }
    }, []);

    return (
      <Styled.Autocomplete ref={ref} {...rest}>
        {renderLabel()}
        <Styled.AutocompleteContainer onClick={disabled || readOnly ? undefined : handleOpenClick}>
          <Input
            {...(InputPropsData || {})}
            ref={inputRef}
            size={size}
            value={getValue()}
            renderTags={renderTags}
            selectedItems={selected}
            readOnly={readOnly}
            error={error}
            focusOnMount={focusOnOpen}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            disabled={disabled}
            placeholder={placeholder}
            fullWidth={fullWidth}
            iconEnd={() => (
              <ArrowTick
                onClick={disabled || readOnly ? undefined : handleOpenClick}
                type={open ? 'top' : 'bottom'}
                IconProps={{ size: size === Size.Md ? 16 : 14 }}
              />
            )}
            clearIcon={
              isItemSelected && (
                <Styled.CrossIcon>
                  <Cross size={12} />
                </Styled.CrossIcon>
              )
            }
            clearIconClick={handleClearIconClick}
          />
        </Styled.AutocompleteContainer>
        <Menu
          onClose={handleCloseClick}
          open={open}
          scroll={scroll}
          anchorEl={anchorEl}
          style={{
            maxHeight: '250px',
          }}
          {...MenuProps}
        >
          {typeof filteredOptions[0] === 'object'
            ? Object.values(filteredOptions).map((option: AutocompleteObjectOptionstype, index: number) =>
                renderMenuItem(option.label, index)
              )
            : filteredOptions?.map((item: any, index: number) => renderMenuItem(item, index))}
        </Menu>
        {renderHint()}
      </Styled.Autocomplete>
    );
  }
);

Autocomplete.defaultProps = {
  size: InputSize.Md,
  // multiple: false,
  disabled: false,
  scroll: true,
  readOnly: false,
};

Autocomplete.propTypes = {
  children: PT.oneOfType([PT.element, PT.arrayOf(PT.element)]),
  size: PT.oneOf(objectValues(InputSize)),
  LabelProps: PT.exact(labelPropTypes) as Validator<LabelProps>,
  InputProps: PT.exact(inputPropTypes) as Validator<InputProps>,
  value: PT.oneOfType([PT.string, PT.array]).isRequired,
  label: PT.node,
  hint: PT.node,
  options: PT.array.isRequired,
  noOptionsText: PT.string,
  placeholder: PT.string,
  readOnly: PT.bool,
  fullWidth: PT.bool,
  multiple: PT.bool,
  disabled: PT.bool,
  scroll: PT.bool,
  focusOnOpen: PT.bool,
  error: PT.bool,
  onChange: PT.func,
  onOpen: PT.func,
  onClose: PT.func,
  getOptionDisabled: PT.func,
};

export default Autocomplete;
