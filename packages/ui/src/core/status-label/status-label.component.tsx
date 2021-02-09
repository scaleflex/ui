import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { StatusLabelProps } from './status-label.props';
import { Size, Type } from './types';
import Styled from './status-label.styles';

const StatusLabel = intrinsicComponent<StatusLabelProps, HTMLDivElement>((
  {
    label, type, size, ...rest
  }: StatusLabelProps,
  ref
): JSX.Element => (
  <Styled.StatusLabelWrapper
    ref={ref}
    size={size}
    type={type}
    label={label}
    {...rest}
  >
    <Styled.StatusLabel>{label}</Styled.StatusLabel>

  </Styled.StatusLabelWrapper>
));

StatusLabel.defaultProps = {
  label: '',
  type: Type.Default,
  size: Size.Md
};

StatusLabel.propTypes = {
  label: PT.string.isRequired,
  type: PT.oneOf(objectValues(Type)),
  size: PT.oneOf(objectValues(Size)),
};

export default StatusLabel;
