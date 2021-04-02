import React from 'react';
import PT from 'prop-types';
import RadioButtonIcon from '@scaleflex/icons/radio-button';
import RadioButtonUncheckedIcon from '@scaleflex/icons/radio-button-unchecked';
import { intrinsicComponent } from '../../utils/functions';
import type { RadioProps } from './radio.props';
import Styled from './radio.styles';

const Radio = intrinsicComponent<RadioProps, HTMLSpanElement>(
  ({ checked, onChange, radioProps, readOnly, disabled, ...rest }: RadioProps, ref): JSX.Element => (
    <Styled.Radio {...rest} ref={ref}>
      <Styled.Input
        checked={checked}
        onChange={readOnly || disabled ? undefined : onChange}
        disabled={disabled}
        {...radioProps}
      />

      {checked ? <RadioButtonIcon /> : <RadioButtonUncheckedIcon />}
    </Styled.Radio>
  )
);

Radio.defaultProps = {
  checked: false,
};

Radio.propTypes = {
  checked: PT.bool,
  onChange: PT.func,
  // eslint-disable-next-line react/forbid-prop-types
  radioProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool,
};

export default Radio;
