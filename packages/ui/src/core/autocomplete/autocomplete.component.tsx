import React, { useRef, useEffect, useState } from 'react';
import PT, { Validator } from 'prop-types';
import Cross from '@scaleflex/icons/cross';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { AutocompleteProps } from './autocomplete.props';
import { propTypes as labelPropTypes } from '../label/label.component';
import type { LabelProps } from '../label';
import type { AnchorElType } from '../menu/menu.props';
import Label from '../label';
import FormHint from '../form-hint';
import ArrowTick from '../arrow-tick';
import Input from '../input';
import Menu from '../menu';
import MenuItem from '../menu-item';
import Tag from '../tag';
import { Size, Background } from './types';
import Styled from './autocomplete.styles';

const Autocomplete = intrinsicComponent<AutocompleteProps, HTMLDivElement>(
  (
    {
      children,
      MenuProps,
      LabelProps: LabelPropsData,
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
      options,
      background,
      ...rest
    },
    ref
  ): JSX.Element => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [selected, setSelected] = useState<string[] | string>(multiple ? [] : '');
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
    const [anchorEl, setAnchorEl] = useState<AnchorElType>(undefined);
    const [currentItemIndex, setCurrentItemIndex] = useState<number>(-1);
    const [disabledOptions, setDisabledOptions] = useState<string[]>([]);

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

    const handleOnRemoveItem = (event: any, itemIndex: number): void => {
      const updatedSelectedItems = Array.isArray(selected)
        ? selected.filter((_, index: number) => index !== itemIndex)
        : '';
      setSelected(updatedSelectedItems);
      if (onChange) {
        onChange(event, updatedSelectedItems);
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

    const handleMenuItemClick = (event: any, item: string): void => {
      // menu item shouldn't be clickable if it's disabled or = 'No options'
      if (item === noOptionsText || disabledOptions.includes(item)) {
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

    const renderTags = (): JSX.Element[] | JSX.Element | boolean | undefined => {
      if (multiple && selectedItems && Array.isArray(selected)) {
        return selected.map((item: string, index: number) => (
          <Tag
            key={index}
            tagIndex={index}
            style={{ margin: '0px 4px 4px 0px' }}
            onRemove={(_, event) => handleOnRemoveItem(event, index)}
          >
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

        return <FormHint error={error}>{hint}</FormHint>;
      }

      return null;
    };

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>): void => {
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
          if (currentItemIndex >= 0) handleSelectedItem(event, filteredOptions[currentItemIndex]);
        }

        if (event.key === 'Escape') {
          handleCloseClick(event);
        }
      }
    };

    useEffect(() => {
      if (getOptionDisabled) {
        const disapledMenuOptions = options?.filter((opt, index) => getOptionDisabled(opt, index));
        setDisabledOptions(disapledMenuOptions || []);
      }
    }, [getOptionDisabled]);

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
      } else {
        const filteredMenuOptions = selectedItems ? options : options?.filter((option) => option.includes(value));
        setFilteredOptions(filteredMenuOptions || []);
      }
    }, [value]);

    if (!filteredOptions?.length) {
      filteredOptions?.push(noOptionsText);
    }

    return (
      <Styled.Autocomplete ref={ref}>
        {renderLabel()}
        <Input
          {...rest}
          ref={inputRef}
          onKeyDown={keyDownHandler}
          size={size}
          value={getValue()}
          showTags={renderTags()}
          readOnly={disabled}
          focusOnMount={focusOnOpen}
          background={background}
          onClick={disabled ? undefined : handleOpenClick}
          onChange={(event: React.SyntheticEvent<HTMLInputElement>) => {
            handleInputChange(event);
          }}
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

        <Menu onClose={handleCloseClick} open={open} anchorEl={anchorEl} {...MenuProps}>
          {filteredOptions?.map((item, index) => (
            <MenuItem
              key={index}
              value={item}
              noOptionsText={item === noOptionsText}
              getOptionDisabled={disabledOptions.includes(item)}
              active={(multiple && selected.includes(item)) || item === selected || index === currentItemIndex}
              onClick={(event: React.MouseEvent<HTMLDivElement>) => handleMenuItemClick(event, item)}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
        {renderHint()}
      </Styled.Autocomplete>
    );
  }
);

export const defaultProps = {
  size: Size.Md,
  multiple: false,
  disabled: false,
  background: Background.Primary,
};

Autocomplete.defaultProps = defaultProps;

export const simpleValuePropTypes = PT.oneOfType([PT.string, PT.number, PT.oneOf([null])]);

export const propTypes = {
  children: PT.oneOfType([PT.element, PT.arrayOf(PT.element)]),
  size: PT.oneOf(objectValues(Size)),
  multiple: PT.bool,
  label: PT.node,
  hint: PT.node,
  value: PT.oneOfType([PT.string, PT.arrayOf(PT.string)]).isRequired,
  options: PT.arrayOf(PT.string),
  disabled: PT.bool,
  noOptionsText: PT.string,
  focusOnOpen: PT.bool,
  onChange: PT.func,
  onOpen: PT.func,
  onClose: PT.func,
  getOptionDisabled: PT.bool,
  LabelProps: PT.exact(labelPropTypes) as Validator<LabelProps>,
  error: PT.bool,
  background: PT.oneOf(objectValues(Background)),
};

Autocomplete.propTypes = propTypes;

export default Autocomplete;
