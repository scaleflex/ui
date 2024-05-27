import React, { useState } from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import ArrowTick from '../arrow-tick';
import Menu from '../menu';
import type { AnchorElType } from '../menu/menu.props';
import type { SelectProps } from './select.props';
import { renderValue, renderOption } from './select.utils';
import { InputSize } from '../../utils/types';
import Styled from './select.styles';
import { Size } from '../cross-button/types';

const Select = intrinsicComponent<SelectProps, HTMLDivElement>(
  (
    {
      children,
      size = InputSize.Md,
      error = false,
      multiple = false,
      onChange,
      value,
      fullWidth = false,
      selectProps,
      // eslint-disable-next-line no-shadow
      MenuProps,
      readOnly = false,
      disabled,
      scroll = true,
      placeholder,
      showSelectionKey,
      hideMenuItemsActions = false,
      showClearIcon = false,
      renderLabel,
      onRequestClose,
      hideEllipsis = false,
      ...rest
    }: SelectProps,
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

    const handleClearSelection = (event: React.MouseEvent<HTMLButtonElement>): void => {
      event.stopPropagation();

      if (typeof onChange === 'function') {
        onChange('');
      }
    };

    return (
      <Styled.Container ref={ref} fullWidth={Boolean(fullWidth)}>
        <Styled.Select
          {...rest}
          disabled={disabled}
          size={size}
          $error={error}
          $fullWidth={Boolean(fullWidth)}
          readOnly={readOnly}
          showSelectionKey={showSelectionKey}
          isValueExists={isValueExists}
          onClick={readOnly || disabled ? undefined : handleClick}
        >
          {isValueExists && (
            <Styled.Label hideEllipsis={hideEllipsis} size={size}>
              {typeof renderLabel === 'function'
                ? renderLabel(value)
                : renderValue({ value, multiple, children, showSelectionKey })}
            </Styled.Label>
          )}

          {!isValueExists && <Styled.Placeholder size={size}>{placeholder}</Styled.Placeholder>}

          {!readOnly && showClearIcon && (
            <Styled.StyledCrossButton size={size === Size.Md ? Size.Sm : Size.Xs} onClick={handleClearSelection} />
          )}

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

export const simpleValuePropTypes = PT.oneOfType([PT.string, PT.number, PT.oneOf([null])]);

export default Select;
