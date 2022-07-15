import React, { useRef, useState } from 'react';
import PT from 'prop-types';
import Cross from '@scaleflex/icons/cross';
import { intrinsicComponent } from '../../utils/functions';
import type { AutocompleteProps } from './autocomplete.props';
import type { AnchorElType } from '../menu/menu.props';
import { Size } from '../input/types';
import ArrowTick from '../arrow-tick';
import Input from '../input';
import Menu from '../menu';
import MenuItem from '../menu-item';
import Styled from './autocomplete.styles';

const Autocomplete = intrinsicComponent<AutocompleteProps, HTMLDivElement>(
  (
    { children, MenuProps, value, onChange, multiple, size, readOnly, disabled, options, ...rest },
    ref
  ): JSX.Element => {
    const inputRef = useRef<HTMLDivElement | null>(ref);

    const [selectedItem, setSelectedItem] = useState<string>('');
    const [anchorEl, setAnchorEl] = useState<AnchorElType>(undefined);
    const open = Boolean(anchorEl);

    const handleClick = (): void => setAnchorEl(inputRef.current);
    const handleClose = (): void => setAnchorEl(undefined);

    const clearIcon = selectedItem.length ? () => <Cross size={12} /> : undefined;
    const handleClearIcon = selectedItem.length
      ? (event: any): void => {
          event?.stopPropagation();
          onChange('');
          setSelectedItem('');
        }
      : undefined;

    const filteredOptions = selectedItem.length ? options : options?.filter((option) => option.includes(value));

    if (!filteredOptions?.length) {
      filteredOptions?.push('No options');
    }

    const handleSelectedItem = (item: string): void => {
      onChange(item);
      handleClose();
      setSelectedItem(item);
    };

    return (
      <>
        <Styled.Container ref={inputRef} onClick={handleClick}>
          <Input
            {...rest}
            size="md"
            value={value}
            onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => {
              onChange(currentTarget.value);
              setAnchorEl(inputRef.current);
              setSelectedItem('');
            }}
            iconEnd={() => <ArrowTick type={open ? 'top' : 'bottom'} IconProps={{ size: 10 }} />}
            secondIconEnd={clearIcon}
            iconClickSecondEnd={(event) => handleClearIcon(event)}
          />
        </Styled.Container>
        <Menu onClose={handleClose} open={open} anchorEl={anchorEl} {...MenuProps}>
          {filteredOptions?.map((item, index) => (
            <MenuItem key={index} value={item} active={item === selectedItem} onClick={() => handleSelectedItem(item)}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  }
);

export const defaultProps = {
  size: Size.Md,
  multiple: false,
  readOnly: false,
  disabled: false,
};

Autocomplete.defaultProps = defaultProps;

export const simpleValuePropTypes = PT.oneOfType([PT.string, PT.number, PT.oneOf([null])]);

export const propTypes = {
  multiple: PT.bool,
  children: PT.oneOfType([PT.element, PT.arrayOf(PT.element)]),
  value: PT.any,
  onChange: PT.func,
  selectProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool,
  renderLabel: PT.func,
};

Autocomplete.propTypes = propTypes;

export default Autocomplete;
