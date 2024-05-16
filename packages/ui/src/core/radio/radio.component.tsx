import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { RadioProps } from './radio.props';
import Styled from './radio.styles';
import { RadioSize } from './size';

const Radio = intrinsicComponent<RadioProps, HTMLSpanElement>(
  (
    { size = RadioSize.Sm, checked = false, onChange, radioProps, readOnly, disabled, ...rest }: RadioProps,
    ref
  ): JSX.Element => (
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
  )
);

export default Radio;
