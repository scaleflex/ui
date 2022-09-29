import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { RadioProps } from './radio.props';
import Styled from './radio.styles';
import { RadioSize } from './size';

const Radio = intrinsicComponent<RadioProps, HTMLSpanElement>(
  ({ size, checked, onChange, radioProps, readOnly, disabled, ...rest }: RadioProps, ref): JSX.Element => (
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

Radio.defaultProps = {
  checked: false,
  size: RadioSize.Sm,
};

Radio.propTypes = {
  checked: PT.bool,
  onChange: PT.func,
  // eslint-disable-next-line react/forbid-prop-types
  radioProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool,
  size: PT.oneOf(objectValues(RadioSize)),
};

export default Radio;
