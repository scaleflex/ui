import React, { useRef, useEffect, useState } from 'react';
import PT, { Validator } from 'prop-types';
import Cross from '@scaleflex/icons/cross';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { AutocompleteProps } from './autocomplete.props';
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
import { InputBackgroundColor, InputSize } from '../../utils/types';
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
      objectOptions,
      onChange,
      onOpen,
      onClose,
      getOptionDisabled,
      multiple,
      size,
      disabled,
      options,
      background,
      placeholder,
      fullWidth,
      ...rest
    },
    ref
  ): JSX.Element => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [selected, setSelected] = useState<string[] | string>(multiple ? [] : '');
    const [filteredOptions, setFilteredOptions] = useState<string[] | { id: number; label: string }[]>(options);
    const [anchorEl, setAnchorEl] = useState<AnchorElType>(undefined);
    const [currentItemIndex, setCurrentItemIndex] = useState<number>(-1);

    const open = Boolean(anchorEl);
    const selectedItems = selected.length > 0;

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
      }
    };

    const handleSelectedItem = (
      event: React.KeyboardEvent<HTMLInputElement> | React.SyntheticEvent<HTMLInputElement>,
      item: string
    ): void => {
      // make sure this item isn't already selected in both modes (multiple or single)
      if (!selected.includes(item) || (!multiple && selected !== item)) {
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

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
      if (open) {
        if (event.key === 'ArrowUp') {
          if (currentItemIndex > 0) setCurrentItemIndex((prev) => prev - 1);
          else {
            setCurrentItemIndex(filteredOptions.length - 1);
          }
        }

        if (event.key === 'ArrowDown') {
          if (currentItemIndex < filteredOptions.length - 1) setCurrentItemIndex((prev) => prev + 1);
          else {
            setCurrentItemIndex(0);
          }
        }

        if (event.key === 'Enter') {
          if (currentItemIndex >= 0) {
            if (typeof filteredOptions[0] === 'string') {
              handleSelectedItem(event, filteredOptions[currentItemIndex]);
            } else {
              const option = filteredOptions.find(
                (opt: { id: number; label: string }, index) => index === currentItemIndex
              );
              handleSelectedItem(event, option.label);
            }
          }
        }

        if (event.key === 'Escape') {
          handleCloseClick(event);
        }
      }
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
          <Label error={error} {...(LabelPropsData || {})}>
            {label}
          </Label>
        );
      }

      return null;
    };

    // TODO: refactor how implement tags in input
    // const renderTags = (): JSX.Element[] | JSX.Element | boolean | undefined => {
    //   if (multiple && selectedItems && Array.isArray(selected)) {
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

        return <FormHint error={error}>{hint}</FormHint>;
      }

      return null;
    };

    const renderMenu = (): any => {
      // if (objectOptions && !selectedItems && filteredOptions[0] !== noOptionsText) {
      if (typeof filteredOptions[0] !== 'string') {
        return Object.values(filteredOptions).map((opt, index) => {
          const { label } = opt;
          return (
            <MenuItem
              key={index}
              value={label}
              noOptionsText={label === noOptionsText}
              disabled={getOptionDisabled && getOptionDisabled(label, index)}
              active={(multiple && selected.includes(label)) || label === selected || index === currentItemIndex}
              onClick={(event: React.MouseEvent<HTMLDivElement>) => handleMenuItemClick(event, label, index)}
            >
              {label}
            </MenuItem>
          );
        });
      }

      return filteredOptions?.map((item, index) => (
        <MenuItem
          key={index}
          value={item}
          noOptionsText={item === noOptionsText}
          disabled={getOptionDisabled && getOptionDisabled(item, index)}
          active={(multiple && selected.includes(item)) || item === selected || index === currentItemIndex}
          onClick={(event: React.MouseEvent<HTMLDivElement>) => handleMenuItemClick(event, item, index)}
        >
          {item}
        </MenuItem>
      ));
    };

    useEffect(() => {
      if (focusOnOpen) setAnchorEl(inputRef.current);
    }, [focusOnOpen]);

    useEffect(() => {
      if (multiple && value?.length > 0) {
        if (selectedItems) {
          // lastValue = selectedItem | enteredValue
          // ["item1","ite"]
          const lastValue = value[value.length - 1];
          const filteredMenuOptions = selected.includes(lastValue)
            ? options
            : options?.filter((option) => option.includes(lastValue));
          setFilteredOptions(filteredMenuOptions || []);
        } else {
          // filter menu options based on the value[0] as it's an array in multiple mode
          const filteredMenuOptions = options?.filter((option) => option.includes(value[0]));
          setFilteredOptions(filteredMenuOptions || []);
        }
      } else if (objectOptions) {
        const filteredMenuOptions = selectedItems
          ? options.map((opt) => opt.label)
          : options?.filter((option) => {
              if (option.label?.includes(value)) {
                return option.label;
              }
            });
        setFilteredOptions(filteredMenuOptions || []);
      } else {
        const filteredMenuOptions = selectedItems ? options : options?.filter((option) => option.includes(value));
        setFilteredOptions(filteredMenuOptions || []);
      }
    }, [value]);

    useEffect(() => {
      if (filteredOptions?.length === 0) {
        setFilteredOptions([noOptionsText]);
      }
    }, [filteredOptions, value]);

    return (
      <Styled.Autocomplete ref={ref} {...rest}>
        {renderLabel()}
        <Styled.AutocompleteContainer onClick={disabled ? undefined : handleOpenClick}>
          <Input
            {...(InputPropsData || {})}
            ref={inputRef}
            size={size}
            value={getValue()}
            // TODO: refactor how implement tags in input
            // renderTags={renderTags()}
            readOnly={disabled}
            focusOnMount={focusOnOpen}
            background={background}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            placeholder={placeholder}
            fullWidth={fullWidth}
            iconEnd={() => (
              <ArrowTick
                onClick={disabled ? undefined : handleOpenClick}
                type={open ? 'top' : 'bottom'}
                IconProps={{ size: 10 }}
              />
            )}
            clearIcon={selectedItems && <Cross size={12} />}
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
          {renderMenu()}
        </Menu>
        {renderHint()}
      </Styled.Autocomplete>
    );
  }
);

Autocomplete.defaultProps = {
  size: InputSize.Md,
  background: InputBackgroundColor.Primary,
  // multiple: false,
  objectOptions: false,
  disabled: false,
};

Autocomplete.propTypes = {
  children: PT.oneOfType([PT.element, PT.arrayOf(PT.element)]),
  size: PT.oneOf(objectValues(InputSize)),
  LabelProps: PT.exact(labelPropTypes) as Validator<LabelProps>,
  InputProps: PT.exact(inputPropTypes) as Validator<InputProps>,
  background: PT.oneOf(objectValues(InputBackgroundColor)),
  value: PT.oneOfType([PT.string, PT.array]).isRequired,
  label: PT.node,
  hint: PT.node,
  options: PT.array.isRequired,
  noOptionsText: PT.string,
  placeholder: PT.string,
  fullWidth: PT.bool,
  multiple: PT.bool,
  disabled: PT.bool,
  focusOnOpen: PT.bool,
  objectOptions: PT.bool,
  error: PT.bool,
  onChange: PT.func,
  onOpen: PT.func,
  onClose: PT.func,
  getOptionDisabled: PT.func,
};

export default Autocomplete;
