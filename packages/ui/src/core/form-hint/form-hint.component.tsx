import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { FormHintProps } from './form-hint.props';
import { InputSize } from '../../utils/types';
import Styled from './form-hint.styles';

const FormHint = intrinsicComponent<FormHintProps, HTMLSpanElement>(
  ({ error = false, ...rest }, ref): JSX.Element => <Styled.FormHint ref={ref} $error={error} {...rest} />
);

FormHint.propTypes = {
  error: PT.bool,
  size: PT.oneOf(objectValues(InputSize)),
};

export default FormHint;
