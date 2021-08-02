import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { LabelProps } from './label.props';
import { Type } from './types';
import Styled from './label.styles';

const Label = intrinsicComponent<LabelProps, HTMLLabelElement>(
  ({ children, icon, error, type, ...rest }: LabelProps, ref): JSX.Element => (
    <Styled.Label ref={ref} error={error} type={type} {...rest}>
      {icon && <Styled.Icon error={Boolean(error)}>{typeof icon === 'function' ? icon() : icon}</Styled.Icon>}
      {children}
      {/* TODO Select for type: localization */}
    </Styled.Label>
  )
);

Label.defaultProps = {
  type: Type.Default,
  error: false,
};

export const propTypes = {
  type: PT.oneOf(objectValues(Type)),
  icon: PT.oneOfType([PT.node, PT.func]),
  error: PT.bool,
  htmlFor: PT.string,
};

Label.propTypes = propTypes;

export default Label;
