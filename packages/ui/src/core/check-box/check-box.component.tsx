import React from 'react';
import Tick from '@scaleflex/icons/tick';
import Intermediate from '@scaleflex/icons/intermediate';

import { lightPalette } from '../../theme/roots/palette';
import { Color } from '../../utils/types/palette';
import { ignoreEvent } from '../../utils/functions';
import type { CheckBoxProps } from './check-box.props';
import Styled from './check-box.styles';
import { Size, Type } from './types';
import { getCheckboxIconSize } from './check-box.utils';

const CheckBox = ({
  size = Size.Md,
  type = Type.Checkbox,
  checked = false,
  onChange,
  checkBoxProps,
  readOnly = false,
  disabled = false,
  ref,
  ...rest
}: CheckBoxProps): JSX.Element => {
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
    <Styled.CheckBox $size={size} disabled={Boolean(disabled)} checked={Boolean(checked)} ref={ref} {...rest}>
      <Styled.Input
        checked={checked}
        disabled={disabled}
        onChange={readOnly || disabled ? ignoreEvent : onChange}
        {...checkBoxProps}
      />
      {checked ? (
        getIcon({ size: getCheckboxIconSize(size), color: lightPalette[Color.ButtonPrimaryText] })
      ) : (
        <Styled.UnCheckedIcon>
          {getIcon({ size: getCheckboxIconSize(size), color: lightPalette[Color.Accent_4_0_Opacity] })}
        </Styled.UnCheckedIcon>
      )}
    </Styled.CheckBox>
  );
};

export default CheckBox;
