import React from 'react';

import type { RadioProps } from './radio.props';
import Styled from './radio.styles';
import { RadioSize } from './size';

const Radio = ({
  size = RadioSize.Sm,
  checked = false,
  onChange,
  radioProps,
  readOnly,
  disabled,
  ref,
  ...rest
}: RadioProps): JSX.Element => (
  <Styled.Radio disabled={disabled} {...rest} ref={ref}>
    <Styled.Input
      checked={checked}
      onChange={readOnly || disabled ? undefined : onChange}
      disabled={disabled}
      size={size}
      {...radioProps}
    />
    <Styled.RadioBox disabled={disabled} size={size} />
  </Styled.Radio>
);

export default Radio;
