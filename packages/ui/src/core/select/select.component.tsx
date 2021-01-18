import React, { useState } from 'react';
import PT, { Validator } from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import ArrowTick from '../arrow-tick';
import Menu from '../menu';
import type { AnchorElType } from '../menu/menu.props';
import type { SelectProps, SelectSimpleValueType } from './select.props';
import { renderValue, renderOption } from './select.utils';
import { Size } from './types';
import Styled from './select.styles';

const Select = intrinsicComponent<SelectProps, HTMLDivElement>((
  {
    children, size, error, multiple, onChange, value, fullWidth, ...rest
  },
  ref
): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<AnchorElType>(undefined);
  const open = Boolean(anchorEl);
  const handleClick = (event: any): void => setAnchorEl(event.currentTarget);
  const handleClose = (): void => setAnchorEl(undefined);

  return (
    <Styled.Container ref={ref} fullWidth={Boolean(fullWidth)}>
      <Styled.Select
        {...rest}
        size={size}
        error={error}
        fullWidth={Boolean(fullWidth)}
        onClick={handleClick}
      >
        <Styled.Label>
          {renderValue({ value, multiple, children })}
        </Styled.Label>

        <Styled.Icon>
          <ArrowTick
            type={open ? 'top' : 'bottom'}
            // IconProps={{ size: size === Size.Md ? 13 : 11 }}
            IconProps={{ size: 8 }}
          />
        </Styled.Icon>
      </Styled.Select>

      <Styled.Input />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        fullWidth
      >
        {React.Children.map(children, (child) => renderOption(
          child,
          {
            value, multiple, size, onClose: handleClose, onChange
          }
        ))}
      </Menu>
    </Styled.Container>
  );
});

export const defaultProps = {
  size: Size.Md,
  error: false,
  multiple: false,
  fullWidth: false,
};

Select.defaultProps = defaultProps;

export const simpleValuePropTypes = PT.oneOfType([
  PT.string, PT.number, PT.oneOf([null]),
]);

export const propTypes = {
  size: PT.oneOf(objectValues(Size)),
  error: PT.bool,
  multiple: PT.bool,
  fullWidth: PT.bool,
  children: PT.oneOfType([PT.element, PT.arrayOf(PT.element)]).isRequired,
  value: PT.oneOfType([
    PT.string,
    PT.number,
    PT.oneOf([null]),
    PT.arrayOf(simpleValuePropTypes)
  ]) as Validator<SelectSimpleValueType | SelectSimpleValueType[]>,
  onChange: PT.func,
};

Select.propTypes = propTypes;

export default Select;
