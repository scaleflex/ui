import React from 'react';
import PT from 'prop-types';
import CheckBoxIcon from '@scaleflex/icons/check-box';
import CheckBoxUncheckedIcon from '@scaleflex/icons/check-box-unchecked';

import { lightPalette } from '@scaleflex/ui/theme/roots/palette';
import { Color } from '@scaleflex/ui/utils/types/palette';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { CheckBoxProps } from './check-box.props';
import Styled from './check-box.styles';
import { Size } from './size';
import { sizeCheckboxMixin } from './check-box.mixin';

const CheckBox = intrinsicComponent<CheckBoxProps, HTMLSpanElement>(
  (
    { isHovering, size = Size.Sm, checked, onChange, checkBoxProps, readOnly, disabled, ...rest }: CheckBoxProps,
    ref
  ): JSX.Element => {
    const getIconBackgroundColor = () => {
      if (disabled) return lightPalette[Color.CheckboxDisabled];

      if (isHovering && !checked) return lightPalette[Color.TextPrimaryInvert];
    };

    return (
      <Styled.CheckBox size={size} disabled={Boolean(disabled)} ref={ref} {...rest}>
        <Styled.Input
          checked={checked}
          disabled={disabled}
          size={size}
          onChange={readOnly || disabled ? undefined : onChange}
          {...checkBoxProps}
        />
        {checked || (isHovering && !disabled) ? (
          <CheckBoxIcon
            getIconBackgroundColor={getIconBackgroundColor}
            checked={Boolean(checked)}
            isHovering={Boolean(isHovering)}
            disabled={Boolean(disabled)}
            size={sizeCheckboxMixin[size]}
          />
        ) : (
          <CheckBoxUncheckedIcon disabled={Boolean(disabled)} size={sizeCheckboxMixin[size]} />
        )}
      </Styled.CheckBox>
    );
  }
);

CheckBox.defaultProps = {
  checked: false,
  size: Size.Sm,
};

CheckBox.propTypes = {
  checked: PT.bool,
  onChange: PT.func,
  checkBoxProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool,
  isHovering: PT.bool,
  size: PT.oneOf(objectValues(Size)),
};

export default CheckBox;
