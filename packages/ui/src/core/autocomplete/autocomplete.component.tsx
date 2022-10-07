import React, { useRef, useEffect, useState } from 'react';
import PT, { Validator } from 'prop-types';
import Cross from '@scaleflex/icons/cross';
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
import MenuItem from '../menu-item';
// TODO: refactor how implement tags in input
// import Tag from '../tag';
import { InputSize } from '../../utils/types';
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

    const open = Boolean(anchorEl);
    const isItemSelected = selected.length > 0;

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

    // TODO: refactor how implement tags in input
    // const handleOnRemoveItem = (event: any, itemIndex: number): void => {
    //   const updatedSelectedItems = Array.isArray(selected)
    //     ? selected.filter((_, index: number) => index !== itemIndex)
    //     : '';
    //   setSelected(updatedSelectedItems);
    //   if (onChange) {
    //     onChange(event, updatedSelectedItems);
    //   }
    // };

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
        setCurrentItemIndex(-1);
      }
    };

    const handleSelectedItem = (
      event: React.KeyboardEvent<HTMLInputElement> | React.SyntheticEvent<HTMLInputElement>,
      item: string
    ): void => {
      // make sure this item isn't already selected
      if (!multiple && selected !== item) {
        handleOnChange(event, item);

        if (multiple) {
          setSelected((prev) => [...prev, item]);
        } else {
          setSelected(item);
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
        const lastValue = value[value.length - 1];
        if (selected.includes(lastValue)) {
          return '';
        }

        return lastValue;
      }
      return value;
    };

    const handleInputChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
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

    // TODO: refactor how implement tags in input
    // const getMultipleFilteredOptions = (): void => {
    //   if (isItemSelected) {
    //     // lastValue = selectedItem | enteredValue
    //     // ["item1","ite"]
    //     const lastValue = value[value.length - 1];
    //     const filteredMenuOptions = selected.includes(lastValue)
    //       ? options
    //       : options?.filter((option: string) => option.includes(lastValue));
    //     setFilteredOptions(filteredMenuOptions || []);
    //   } else {
    //     // filter menu options based on the value[0] as it's an array in multiple mode
    //     const filteredMenuOptions = options?.filter((option: any) => option.includes(value[0]));
    //     setFilteredOptions(filteredMenuOptions || []);
    //   }
    // };

    const getFilteredOptions = (): void => {
      let filteredMenuOptions = typeof options[0] === 'object' ? options.map((option: any) => option.label) : options;

      if (!isItemSelected) {
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

    // TODO: refactor how implement tags in input
    // const renderTags = (): JSX.Element[] | JSX.Element | boolean | undefined => {
    //   if (multiple && isItemSelected && Array.isArray(selected)) {
    //     return selected.map((item: string, index: number) => (
    //       <Tag
    //         key={index}
    //         tagIndex={index}
    //         style={{ margin: '0px 4px 4px 0px' }}
    //         onRemove={(_, event) => handleOnRemoveItem(event, index)}
    //       >
    //         {item}
    //       </Tag>
    //     ));
    //   }
    // };

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

      return (
        <MenuItem
          key={optionIndex}
          value={item}
          noOptionsText={item === noOptionsText}
          disabled={getOptionDisabled && getOptionDisabled(item, optionIndex)}
          active={(multiple && selected.includes(item)) || item === selected || index === currentItemIndex}
          onClick={(event: React.MouseEvent<HTMLDivElement>) => handleMenuItemClick(event, item, optionIndex)}
          enableScrollIntoView
        >
          {item}
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
      if (multiple && value?.length > 0) {
        // TODO: refactor how implement tags in input
        // getMultipleFilteredOptions();
      } else {
        getFilteredOptions();
      }
    }, [value, anchorEl]);

    useEffect(() => {
      if (filteredOptions?.length === 0) {
        setFilteredOptions([noOptionsText]);
      }
    }, [filteredOptions, value]);

    return (
      <Styled.Autocomplete ref={ref} {...rest}>
        {renderLabel()}
        <Styled.AutocompleteContainer onClick={disabled || readOnly ? undefined : handleOpenClick}>
          <Input
            {...(InputPropsData || {})}
            ref={inputRef}
            size={size}
            value={getValue()}
            // TODO: refactor how implement tags in input
            // renderTags={renderTags()}
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
                IconProps={{ size: 10 }}
              />
            )}
            clearIcon={isItemSelected && <Cross size={12} />}
            clearIconClick={handleClearIconClick}
          />
        </Styled.AutocompleteContainer>
        <Menu
          onClose={handleCloseClick}
          open={open}
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
  focusOnOpen: PT.bool,
  error: PT.bool,
  onChange: PT.func,
  onOpen: PT.func,
  onClose: PT.func,
  getOptionDisabled: PT.func,
};

export default Autocomplete;
