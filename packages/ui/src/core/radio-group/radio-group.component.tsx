import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Radio from '../radio';
import type { RadioGroupProps } from './radio-group.props';
import Styled from './radio-group.styles';

const RadioGroup = intrinsicComponent<RadioGroupProps, HTMLLabelElement>((
  {
    label, ...rest
  }: RadioGroupProps,
  ref
): JSX.Element => (
  <Styled.RadioGroup ref={ref}>
    <Radio {...rest} />

    <Styled.Label>
      {label}
    </Styled.Label>
  </Styled.RadioGroup>
));

RadioGroup.defaultProps = {
  checked: false,
};

RadioGroup.propTypes = {
  label: PT.node,
  checked: PT.bool,
  onChange: PT.func,
};

export default RadioGroup;
