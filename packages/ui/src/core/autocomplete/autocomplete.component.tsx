import React, { useRef, useEffect, useState } from 'react';
import PT from 'prop-types';
import Cross from '@scaleflex/icons/cross';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { AutocompleteProps } from './autocomplete.props';
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
      label,
      hint,
      value,
      noOptionsText,
      focusOnOpen,
      tags,
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
    const inputRef = useRef<HTMLInputElement | null>(ref);

    const [selectedItem, setSelectedItem] = useState<string[] | string>(multiple ? [] : '');
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
    const [anchorEl, setAnchorEl] = useState<AnchorElType>(undefined);
    const [currentItemIndex, setCurrentItemIndex] = useState<number>(-1);
    const [disabledOptions, setDisabledOptions] = useState<string[] | undefined>([]);

    const open = Boolean(anchorEl);
    const selectedItems = selectedItem.length > 0;

    const handleOnChange = (event: any, val: any): void => {
      if (multiple) {
        onChange(event, [...selectedItem, val]);
      } else {
        onChange(event, val);
      }
    };

    const handleOnRemoveItem = (itemIndex: number): void => {
      const updatedSelectedItems = selectedItem.filter((_, index) => index !== itemIndex);
      setSelectedItem(updatedSelectedItems);
      onChange(event, updatedSelectedItems);
    };

    const handleOpenClick = (event: any): void => {
      setAnchorEl(inputRef.current);
      if (onOpen) onOpen(event);
    };

    const handleCloseClick = (event: any): void => {
      setAnchorEl(undefined);
      setCurrentItemIndex(-1);
      if (onClose) onClose(event);
    };

    const handleClearIconClick = (event: any): void => {
      event?.stopPropagation();
      if (multiple) {
        onChange(event, []);
        setSelectedItem([]);
      } else {
        onChange(event, '');
        setSelectedItem('');
      }
    };

    const handleSelectedItem = (event: any, item: string): void => {
      if (!selectedItem.includes(item) || (!multiple && selectedItem !== item)) {
        handleOnChange(event, item);
        if (multiple) {
          setSelectedItem((prev) => [...prev, item]);
        } else {
          setSelectedItem(item);
        }
      }
      handleCloseClick(event);
    };

    const renderValue = (): JSX.Element[] | JSX.Element | boolean | undefined => {
      if ((tags || multiple) && selectedItems) {
        if (Array.isArray(selectedItem)) {
          return selectedItem.map((item: string, index: number) => (
            <Tag
              key={index}
              tagIndex={index}
              style={{ margin: '0px 4px 4px 0px' }}
              onRemove={() => handleOnRemoveItem(index)}
            >
              {item}
            </Tag>
          ));
        }

        return <Tag style={{ marginRight: '4px' }}>{selectedItem}</Tag>;
      }
      // return selectedItem;
    };

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
        const getDisabledOptions = options?.filter((opt, index) => getOptionDisabled(opt, index));
        setDisabledOptions(getDisabledOptions);
      }
    }, [getOptionDisabled]);

    useEffect(() => {
      if (focusOnOpen) setAnchorEl(inputRef.current);
    }, [focusOnOpen]);

    useEffect(() => {
      if (multiple && value.length > 0) {
        if (selectedItems) {
          const lastValue = value[value.length - 1];
          const getFilteredOptions = selectedItem.includes(lastValue)
            ? options
            : options?.filter((option) => option.includes(lastValue));
          setFilteredOptions(getFilteredOptions);
        } else {
          const getFilteredOptions = options?.filter((option) => option.includes(value[0]));
          setFilteredOptions(getFilteredOptions);
        }
      } else {
        const getFilteredOptions = selectedItems ? options : options?.filter((option) => option.includes(value));
        setFilteredOptions(getFilteredOptions);
      }
    }, [value]);

    if (!filteredOptions?.length && noOptionsText) {
      filteredOptions?.push('No options');
    }

    return (
      <>
        <Label>{label}</Label>
        <Styled.Container ref={inputRef}>
          <Input
            {...rest}
            onKeyDown={keyDownHandler}
            size={size}
            value={value}
            renderedValues={renderValue()}
            readOnly={disabled}
            autocomplete
            focusOnMount={focusOnOpen}
            background={background}
            onClick={disabled ? undefined : handleOpenClick}
            onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => {
              handleOnChange(event, currentTarget.value);
              setAnchorEl(inputRef.current);
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

          <Menu multiple={multiple} onClose={handleCloseClick} open={open} anchorEl={anchorEl} {...MenuProps}>
            {filteredOptions?.map((item, index) => (
              <MenuItem
                key={index}
                value={item}
                noOptionsText={item === 'No options'}
                getOptionDisabled={disabledOptions.includes(item)}
                active={
                  (multiple && selectedItem.includes(item)) || item === selectedItem || index === currentItemIndex
                }
                onClick={
                  item === 'No options' || disabledOptions.includes(item)
                    ? undefined
                    : (event) => handleSelectedItem(event, item)
                }
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Styled.Container>
        <FormHint>{hint}</FormHint>
      </>
    );
  }
);

export const defaultProps = {
  size: Size.Md,
  multiple: false,
  disabled: false,
  tags: false,
  background: Background.Primary,
};

Autocomplete.defaultProps = defaultProps;

export const simpleValuePropTypes = PT.oneOfType([PT.string, PT.number, PT.oneOf([null])]);

export const propTypes = {
  multiple: PT.bool,
  children: PT.oneOfType([PT.element, PT.arrayOf(PT.element)]),
  label: PT.node,
  hint: PT.node,
  value: PT.any,
  onChange: PT.func,
  selectProps: PT.object,
  disabled: PT.bool,
  tags: PT.bool,
  renderLabel: PT.func,
  background: PT.oneOf(objectValues(Background)),
  size: PT.oneOf(objectValues(Size)),
};

Autocomplete.propTypes = propTypes;

export default Autocomplete;
