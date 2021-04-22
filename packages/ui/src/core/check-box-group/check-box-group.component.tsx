import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import CheckBox from '../check-box';
import type { CheckBoxGroupProps } from './check-box-group.props';
import Styled from './check-box-group.styles';

const CheckBoxGroup = intrinsicComponent<CheckBoxGroupProps, HTMLLabelElement>(
  ({ label, checkBoxProps, readOnly, disabled, ...rest }: CheckBoxGroupProps, ref): JSX.Element => (
    <Styled.CheckBoxGroup ref={ref}>
      <CheckBox checkBoxProps={checkBoxProps} disabled={disabled} readOnly={readOnly} {...rest} />

      <Styled.Label>{label}</Styled.Label>
    </Styled.CheckBoxGroup>
  )
);

CheckBoxGroup.defaultProps = {
  checked: false,
};

CheckBoxGroup.propTypes = {
  label: PT.string,
  checked: PT.bool,
  onChange: PT.func,
  // eslint-disable-next-line react/forbid-prop-types
  checkBoxProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool,
};

export default CheckBoxGroup;