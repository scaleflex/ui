import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import CheckBoxIcon from '@scaleflex/icons/check-box';
import CheckBoxUncheckedIcon from '@scaleflex/icons/check-box-unchecked';
import type { CheckBoxProps } from './check-box.props';
import Styled from './check-box.styles';

const CheckBox = intrinsicComponent<CheckBoxProps, HTMLSpanElement>((
  {
    checked, onChange, ...rest
  }: CheckBoxProps,
  ref
): JSX.Element => (
  <Styled.CheckBox {...rest} ref={ref}>
    <Styled.Input
      checked={checked}
      onChange={onChange}
    />

    {
      checked
        ? <CheckBoxIcon />
        : <CheckBoxUncheckedIcon />
    }
  </Styled.CheckBox>
));

CheckBox.defaultProps = {
  checked: false,
};

CheckBox.propTypes = {
  checked: PT.bool,
  onChange: PT.func,
};

export default CheckBox;
