import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import CheckBox from '../check-box';
import type { CheckBoxGroupProps } from './check-box-group.props';
import Styled from './check-box-group.styles';

const CheckBoxGroup = intrinsicComponent<CheckBoxGroupProps, HTMLInputElement>((
  {
    label, ...rest
  }: CheckBoxGroupProps,
  ref: React.ForwardedRef<HTMLInputElement>
): JSX.Element => (
  <Styled.CheckBoxGroup>
    <CheckBox
      ref={ref}
      {...rest}
    />

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
