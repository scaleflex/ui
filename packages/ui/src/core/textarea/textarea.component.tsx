import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { TextareaProps } from './textarea.props';
import { Background } from '../input/types';
import Styled from './textarea.styles';

const Textarea = intrinsicComponent<TextareaProps, HTMLTextAreaElement>(
  (props: TextareaProps, ref): JSX.Element => <Styled.Textarea ref={ref} {...props} />
);

Textarea.defaultProps = {
  error: false,
  background: Background.Primary,
};

export const propTypes = {
  error: PT.bool,
  value: PT.string,
  background: PT.oneOf(objectValues(Background)),
};

Textarea.propTypes = propTypes;

export default Textarea;
