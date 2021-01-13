import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import RadioButtonIcon from '@scaleflex/icons/radio-button';
import RadioButtonUncheckedIcon from '@scaleflex/icons/radio-button-unchecked';
import type { RadioProps } from './radio.props';
import Styled from './radio.styles';

const Radio = intrinsicComponent<RadioProps, HTMLSpanElement>((
  {
    checked, onChange, ...rest
  }: RadioProps,
  ref
): JSX.Element => (
  <Styled.Radio
    {...rest}
    ref={ref}
  >
    <Styled.Input
      checked={checked}
      onChange={onChange}
    />

    {
      checked
        ? <RadioButtonIcon />
        : <RadioButtonUncheckedIcon />
    }
  </Styled.Radio>
));

Radio.defaultProps = {
  checked: false,
};

Radio.propTypes = {
  checked: PT.bool,
  onChange: PT.func,
};

export default Radio;
