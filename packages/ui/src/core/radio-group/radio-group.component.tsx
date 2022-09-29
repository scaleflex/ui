import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import Radio, { RadioSize } from '../radio';
import type { RadioGroupProps } from './radio-group.props';
import Styled from './radio-group.styles';

const RadioGroup = intrinsicComponent<RadioGroupProps, HTMLLabelElement>(
  (
    {
      size,
      label,
      radioProps,
      readOnly,
      disabled,
      radioStyles,
      labelStyles,
      onChange,
      checked,
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

RadioGroup.defaultProps = {
  checked: false,
  size: RadioSize.Sm,
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
  size: PT.oneOf(objectValues(RadioSize)),
};

export default RadioGroup;
