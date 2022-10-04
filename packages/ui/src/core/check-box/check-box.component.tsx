import React from 'react';
import PT from 'prop-types';
import Tick from '@scaleflex/icons/tick';
import Intermediate from '@scaleflex/icons/intermediate';
import { lightPalette } from '../../theme/roots/palette';
import { Color } from '../../utils/types/palette';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { CheckBoxProps } from './check-box.props';
import Styled from './check-box.styles';
import { Size, Type } from './types';
import { getCheckboxIconSize } from './check-box.utils';

const CheckBox = intrinsicComponent<CheckBoxProps, HTMLSpanElement>(
  (
    {
      size = Size.Sm,
      type = Type.Checkbox,
      checked,
      onChange,
      checkBoxProps,
      readOnly,
      disabled,
      ...rest
    }: CheckBoxProps,
    ref
  ): JSX.Element => {
    const getIcon = (props: any) => {
      switch (type) {
        case Type.Checkbox:
          return <Tick {...props} />;
        case Type.Intermediate:
          return <Intermediate {...props} />;
        default:
          return <Tick {...props} />;
      }
    };

    return (
      <Styled.CheckBox size={size} disabled={Boolean(disabled)} checked={Boolean(checked)} ref={ref} {...rest}>
        <Styled.Input
          checked={checked}
          disabled={disabled}
          size={size}
          onChange={readOnly || disabled ? undefined : onChange}
          {...checkBoxProps}
        />
        {checked ? (
          getIcon({ size: getCheckboxIconSize(size), color: lightPalette[Color.ButtonPrimaryText] })
        ) : (
          <Styled.UnCheckedIcon>
            {getIcon({ size: getCheckboxIconSize(size), color: lightPalette[Color.AccentPrimaryOpacity] })}
          </Styled.UnCheckedIcon>
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
  size: PT.oneOf(objectValues(Size)),
  type: PT.oneOf(objectValues(Type)),
};

export default CheckBox;
