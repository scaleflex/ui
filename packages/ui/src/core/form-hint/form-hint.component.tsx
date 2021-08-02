import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { FormHintProps } from './form-hint.props';
import Styled from './form-hint.styles';

const FormHint = intrinsicComponent<FormHintProps, HTMLSpanElement>(
  (props: FormHintProps, ref): JSX.Element => <Styled.FormHint ref={ref} {...props} />
);

FormHint.defaultProps = {
  error: false,
};

FormHint.propTypes = {
  error: PT.bool,
};

export default FormHint;
