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

    const [selectedItem, setSelectedItem] = useState<string | string[]>(multiple ? [] : '');
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
    const [anchorEl, setAnchorEl] = useState<AnchorElType>(undefined);
    const [currentItemIndex, setCurrentItemIndex] = useState<number>(-1);

    const open = Boolean(anchorEl);
    const selectedItems = selectedItem.length > 0;

    const handleOnChange = (event: any, val: any): void => {
      multiple ? onChange(event, [...selectedItem, val]) : onChange(event, val);
    };

    const handleOnRemoveItem = (itemIndex: number): void => {
      setSelectedItem((prev) => prev.filter((_, index) => index !== itemIndex));
      onChange(event, selectedItem);
    };

    const handleOpenClick = (event: any): void => {
      setAnchorEl(inputRef.current);
      if (onOpen) onOpen(event);
    };

    const handleCloseClick = (event: any): void => {
      setAnchorEl(undefined);
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
      handleOnChange(event, item);
      handleCloseClick(event);
      multiple ? setSelectedItem((prev) => [...prev, item]) : setSelectedItem(item);
    };

    const renderValue = (): JSX.Element[] | boolean | undefined => {
      if (tags || multiple) {
        return (
          selectedItems &&
          selectedItem.map((item: string, index: number) => (
            <Tag
              key={index}
              tagIndex={index}
              style={{ margin: '4px 4px 4px 0' }}
              onRemove={() => handleOnRemoveItem(index)}
            >
              {item}
            </Tag>
          ))
        );
      }
    };

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'ArrowUp') {
        if (currentItemIndex > 0) setCurrentItemIndex((prev) => prev - 1);
        else {
          setCurrentItemIndex(options?.length - 1);
        }
      }

      if (event.key === 'ArrowDown') {
        if (currentItemIndex < options?.length - 1) setCurrentItemIndex((prev) => prev + 1);
        else {
          setCurrentItemIndex(0);
        }
      }

      if (event.key === 'Enter') {
        if (currentItemIndex >= 0) handleSelectedItem(event, options[currentItemIndex]);
      }

      if (event.key === 'Escape') {
        handleCloseClick(event);
      }
    };

    useEffect(() => {
      const getFilteredOptions = selectedItems ? options : options?.filter((option) => option.includes(value));
      setFilteredOptions(getFilteredOptions);
    }, [value]);

    useEffect(() => {
      if (focusOnOpen) setAnchorEl(inputRef.current);
    }, [focusOnOpen]);

    if (!filteredOptions?.length && noOptionsText) {
      filteredOptions?.push('No options');
    }

    return (
      <>
        <Label>{label}</Label>
        <Styled.Container ref={inputRef}>
          <Input
            onKeyDown={keyDownHandler}
            {...rest}
            size={size}
            value={value}
            renderedValues={renderValue()}
            readOnly={disabled}
            tags={tags}
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
                getOptionDisabled={getOptionDisabled && getOptionDisabled(item, index)}
                active={
                  (multiple && selectedItem.includes(item)) || item === selectedItem || index === currentItemIndex
                }
                onClick={
                  item === 'No options' || (getOptionDisabled && getOptionDisabled(item, index))
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
