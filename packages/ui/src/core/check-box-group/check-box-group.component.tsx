import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import CheckBox from '../check-box';
import type { CheckBoxGroupProps } from './check-box-group.props';
import Styled from './check-box-group.styles';

const CheckBoxGroup = intrinsicComponent<CheckBoxGroupProps, HTMLLabelElement>((
  {
    label, ...rest
  }: CheckBoxGroupProps,
  ref
): JSX.Element => (
  <Styled.CheckBoxGroup ref={ref}>
    <CheckBox {...rest} />

    <Styled.Label>
      {label}
    </Styled.Label>
  </Styled.CheckBoxGroup>
));

CheckBoxGroup.defaultProps = {
  checked: false,
};

CheckBoxGroup.propTypes = {
  label: PT.string,
  checked: PT.bool,
  onChange: PT.func,
};

export default CheckBoxGroup;
