import React, { useRef, useEffect, useState } from 'react';
import PT from 'prop-types';
import Cross from '@scaleflex/icons/cross';
import { intrinsicComponent } from '../../utils/functions';
import type { AutocompleteProps } from './autocomplete.props';
import type { AnchorElType } from '../menu/menu.props';
import Label from '../label';
import FormHint from '../form-hint';
import { Size } from '../input/types';
import ArrowTick from '../arrow-tick';
import Input from '../input';
import Menu from '../menu';
import MenuItem from '../menu-item';
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
      onChange,
      onOpen,
      onClose,
      multiple,
      size,
      disabled,
      options,
      ...rest
    },
    ref
  ): JSX.Element => {
    const inputRef = useRef<HTMLDivElement | null>(ref);

    const [selectedItem, setSelectedItem] = useState<string>('');
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
    const [anchorEl, setAnchorEl] = useState<AnchorElType>(undefined);
    const open = Boolean(anchorEl);
    const selectedItems = selectedItem.length > 0;

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
      onChange('');
      setSelectedItem('');
    };

    const handleSelectedItem = (event: any, item: string): void => {
      onChange(item);
      handleCloseClick(event);
      setSelectedItem(item);
    };

    useEffect(() => {
      const getFilteredOptions = selectedItems ? options : options?.filter((option) => option.includes(value));
      setFilteredOptions(getFilteredOptions);
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
            size="md"
            value={value}
            readOnly={disabled}
            onClick={disabled ? undefined : handleOpenClick}
            onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => {
              onChange(currentTarget.value);
              setAnchorEl(inputRef.current);
              setSelectedItem('');
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
                noOptionsText={item === 'No options'}
                active={item === selectedItem}
                onClick={item === 'No options' ? undefined : (event) => handleSelectedItem(event, item)}
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
  renderLabel: PT.func,
};

Autocomplete.propTypes = propTypes;

export default Autocomplete;
