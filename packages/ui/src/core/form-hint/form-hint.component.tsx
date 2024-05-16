import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { FormHintProps } from './form-hint.props';
import Styled from './form-hint.styles';

const FormHint = intrinsicComponent<FormHintProps, HTMLSpanElement>(
  ({ error = false, ...rest }, ref): JSX.Element => <Styled.FormHint ref={ref} $error={error} {...rest} />
);

export default FormHint;
