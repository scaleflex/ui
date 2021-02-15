import React from 'react';
import PT from 'prop-types';
import CheckBoxIcon from '@scaleflex/icons/check-box';
import CheckBoxUncheckedIcon from '@scaleflex/icons/check-box-unchecked';
import { intrinsicComponent } from '../../utils/functions';
import type { CheckBoxProps } from './check-box.props';
import Styled from './check-box.styles';

const CheckBox = intrinsicComponent<CheckBoxProps, HTMLSpanElement>((
  {
    checked, onChange, checkBoxProps, ...rest
  }: CheckBoxProps,
  ref
): JSX.Element => (
  <Styled.CheckBox {...rest} ref={ref}>
    <Styled.Input
      checked={checked}
      onChange={onChange}
      {...checkBoxProps}
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
  // eslint-disable-next-line react/forbid-prop-types
  checkBoxProps: PT.object
};

export default CheckBox;
