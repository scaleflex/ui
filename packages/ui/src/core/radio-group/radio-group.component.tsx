import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import Radio from '../radio';
import type { RadioGroupProps } from './radio-group.props';
import Styled from './radio-group.styles';

const RadioGroup = intrinsicComponent<RadioGroupProps, HTMLLabelElement>(
  (
    { label, radioProps, readOnly, disabled, radioStyles, labelStyles, onChange, checked, ...rest }: RadioGroupProps,
    ref
  ): JSX.Element => (
    <Styled.RadioGroup ref={ref} {...rest}>
      <Radio
        radioProps={radioProps}
        readOnly={readOnly}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        style={{ ...radioStyles }}
      />

      <Styled.Label style={{ ...labelStyles }}>{label}</Styled.Label>
    </Styled.RadioGroup>
  )
);

RadioGroup.defaultProps = {
  checked: false,
};

RadioGroup.propTypes = {
  label: PT.node,
  checked: PT.bool,
  onChange: PT.func,
  radioProps: PT.object,
  radioStyles: PT.object,
  labelStyles: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool,
};

export default RadioGroup;
