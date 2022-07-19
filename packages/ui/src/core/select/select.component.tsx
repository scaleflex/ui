import React, { useState } from 'react';
import PT, { Validator } from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import ArrowTick from '../arrow-tick';
import Menu from '../menu';
import type { AnchorElType, MenuProps } from '../menu/menu.props';
import { propTypes as menuPropTypes } from '../menu/menu.component';
import type { SelectProps, SelectSimpleValueType } from './select.props';
import { renderValue, renderOption } from './select.utils';
import { Size, Background } from './types';
import Styled from './select.styles';

const Select = intrinsicComponent<SelectProps, HTMLDivElement>(
  (
    {
      children,
      size,
      error,
      multiple,
      onChange,
      value,
      fullWidth,
      selectProps,
      // eslint-disable-next-line no-shadow
      MenuProps,
      readOnly,
      disabled,
      placeholder,
      background,
      renderLabel,
      ...rest
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
          background={background}
          error={error}
          fullWidth={Boolean(fullWidth)}
          readOnly={readOnly}
          onClick={readOnly || disabled ? undefined : handleClick}
        >
          <Styled.Label>
            {typeof renderLabel === 'function' ? renderLabel(value) : renderValue({ value, multiple, children })}
          </Styled.Label>

          {!value && <Styled.Placeholder>{placeholder}</Styled.Placeholder>}

          <Styled.Icon>
            <ArrowTick
              type={open ? 'top' : 'bottom'}
              // IconProps={{ size: size === Size.Md ? 13 : 11 }}
              IconProps={{ size: 8 }}
            />
          </Styled.Icon>
          <Styled.Input {...selectProps} />
        </Styled.Select>

        <Menu onClose={handleClose} open={open} anchorEl={anchorEl} {...MenuProps}>
          {React.Children.map(children, (child) =>
            renderOption(child, {
              value,
              multiple,
              size,
              onClose: handleClose,
              onChange: readOnly || disabled ? undefined : onChange,
            })
          )}
        </Menu>
      </Styled.Container>
    );
  }
);

export const defaultProps = {
  size: Size.Md,
  error: false,
  multiple: false,
  fullWidth: false,
  readOnly: false,
  disabled: false,
  background: Background.Primary,
};

Select.defaultProps = defaultProps;

export const simpleValuePropTypes = PT.oneOfType([PT.string, PT.number, PT.oneOf([null])]);

export const propTypes = {
  size: PT.oneOf(objectValues(Size)),
  error: PT.bool,
  multiple: PT.bool,
  fullWidth: PT.bool,
  children: PT.oneOfType([PT.element, PT.arrayOf(PT.element)]),
  value: PT.oneOfType([PT.string, PT.number, PT.oneOf([null]), PT.arrayOf(simpleValuePropTypes)]) as Validator<
    SelectSimpleValueType | SelectSimpleValueType[]
  >,
  onChange: PT.func,
  MenuProps: PT.exact(menuPropTypes) as Validator<MenuProps>,
  // eslint-disable-next-line react/forbid-prop-types
  selectProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool,
  background: PT.oneOf(objectValues(Background)),
  renderLabel: PT.func,
};

Select.propTypes = propTypes;

export default Select;
