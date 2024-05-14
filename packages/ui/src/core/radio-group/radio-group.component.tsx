import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import Radio, { RadioSize } from '../radio';
import type { RadioGroupProps } from './radio-group.props';
import Styled from './radio-group.styles';

const RadioGroup = intrinsicComponent<RadioGroupProps, HTMLLabelElement>(
  (
    {
      size = RadioSize.Sm,
      label,
      radioProps,
      readOnly,
      disabled,
      radioStyles,
      labelStyles,
      onChange,
      checked = false,
      ...rest
    }: RadioGroupProps,
    ref
  ): JSX.Element => (
    <Styled.RadioGroup disabled={disabled} ref={ref} {...rest}>
      <Radio
        radioProps={radioProps}
        readOnly={readOnly}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        size={size}
        style={{ ...radioStyles }}
      />

      <Styled.Label disabled={disabled} size={size} style={{ ...labelStyles }}>
        {label}
      </Styled.Label>
    </Styled.RadioGroup>
  )
);

export default RadioGroup;
