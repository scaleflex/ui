import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { TextareaProps } from './textarea.props';
import Styled from './textarea.styles';

const Textarea = intrinsicComponent<TextareaProps, HTMLTextAreaElement>((
  props: TextareaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>
): JSX.Element => (
  <Styled.Textarea
    ref={ref}
    {...props}
  />
));

Textarea.defaultProps = {
  error: false,
};

Textarea.propTypes = {
  error: PT.bool,
};

export default Textarea;
