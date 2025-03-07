import React from 'react';

import type { FormHintProps } from './form-hint.props';
import Styled from './form-hint.styles';

const FormHint = ({ error = false, ref, ...rest }: FormHintProps): JSX.Element => (
  <Styled.FormHint ref={ref} $error={error} {...rest} />
);

export default FormHint;
