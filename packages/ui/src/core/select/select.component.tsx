import React, { useState } from 'react';
import PT, { Validator } from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import ArrowTick from '../arrow-tick';
import Menu from '../menu';
import type { AnchorElType, MenuProps } from '../menu/menu.props';
import { propTypes as menuPropTypes } from '../menu/menu.component';
import type { SelectProps, SelectSimpleValueType } from './select.props';
import { renderValue, renderOption } from './select.utils';
import { InputSize } from '../../utils/types';
import Styled from './select.styles';
import { Size } from '../menu-item/types';

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
      scroll = true,
      placeholder,
      showSelectionKey,
      hideMenuItemsActions,
      renderLabel,
      onRequestClose,
      hideEllipsis = false,
      ...rest
    },
    ref
  ): JSX.Element => {
    const [anchorEl, setAnchorEl] = useState<AnchorElType>(undefined);
    const open = Boolean(anchorEl);
    const handleClick = (event: any): void => setAnchorEl(event.currentTarget);
    const isValueExists = Array.isArray(value) ? !!value.length : !!value?.toString()?.length;

    const handleClose = (): void => {
      if (onRequestClose) {
        onRequestClose();
      }

      setAnchorEl(undefined);
    };

    return (
      <Styled.Container ref={ref} fullWidth={Boolean(fullWidth)}>
        <Styled.Select
          {...rest}
          disabled={disabled}
          size={size}
          error={error}
          fullWidth={Boolean(fullWidth)}
          readOnly={readOnly}
          showSelectionKey={showSelectionKey}
          onClick={readOnly || disabled ? undefined : handleClick}
        >
          {isValueExists && (
            <Styled.Label hideEllipsis={hideEllipsis}>
              {typeof renderLabel === 'function'
                ? renderLabel(value)
                : renderValue({ value, multiple, children, showSelectionKey })}
            </Styled.Label>
          )}

          {!isValueExists && <Styled.Placeholder size={size}>{placeholder}</Styled.Placeholder>}

          <Styled.Icon size={size}>
            <ArrowTick type={open ? 'top' : 'bottom'} IconProps={{ size: size === Size.Md ? 11 : 10 }} />
          </Styled.Icon>
          <Styled.Input {...selectProps} />
        </Styled.Select>

        <Menu onClose={handleClose} scroll={scroll} open={open} anchorEl={anchorEl} {...MenuProps}>
          {React.Children.map(children, (child) =>
            renderOption(child, {
              value,
              multiple,
              size,
              hideMenuItemsActions,
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
  size: InputSize.Md,
  error: false,
  multiple: false,
  fullWidth: false,
  readOnly: false,
  disabled: false,
  scroll: true,
  hideMenuItemsActions: false,
};

Select.defaultProps = defaultProps;

export const simpleValuePropTypes = PT.oneOfType([PT.string, PT.number, PT.oneOf([null])]);

export const propTypes = {
  size: PT.oneOf(objectValues(InputSize)),
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
  hideMenuItemsActions: PT.bool,
  showSelectionKey: PT.bool,
  scroll: PT.bool,
  renderLabel: PT.func,
  onRequestClose: PT.func,
  hideEllipsis: PT.bool,
};

Select.propTypes = propTypes;

export default Select;
