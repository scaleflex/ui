import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import type { TextareaProps } from './textarea.props';
import Styled from './textarea.styles';

const Textarea = intrinsicComponent<TextareaProps, HTMLTextAreaElement>(
  (props: TextareaProps, ref): JSX.Element => <Styled.Textarea ref={ref} {...props} />
);

Textarea.defaultProps = {
  error: false,
};

export const propTypes = {
  error: PT.bool,
  value: PT.string,
};

Textarea.propTypes = propTypes;

export default Textarea;
