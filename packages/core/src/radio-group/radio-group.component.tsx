import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import Radio from '../radio';
import type { RadioGroupProps } from './radio-group.props';
import Styled from './radio-group.styles';

const RadioGroup = intrinsicComponent<RadioGroupProps, HTMLInputElement>((
  {
    label, ...rest
  }: RadioGroupProps,
  ref: React.ForwardedRef<HTMLInputElement>
): JSX.Element => (
  <Styled.RadioGroup>
    <Radio
      ref={ref}
      {...rest}
    />

    <Styled.Label>
      {label}
    </Styled.Label>
  </Styled.RadioGroup>
));

RadioGroup.defaultProps = {
  checked: false,
};

RadioGroup.propTypes = {
  label: PT.string,
  checked: PT.bool,
  onChange: PT.func,
};

export default RadioGroup;
