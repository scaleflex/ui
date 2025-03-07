import React from 'react';

import type { StatusLabelProps } from './status-label.props';
import { Size, Type, Variant } from './types';
import Styled from './status-label.styles';

const StatusLabel = ({
  label = '',
  variant = Variant.Filled,
  type = Type.Default,
  size = Size.Md,
  iconSize = 8,
  ref,
  ...rest
}: StatusLabelProps): JSX.Element => {
  const showStatusIcon = Boolean(type !== Type.Default && type !== Type.Inactive);

  return (
    <Styled.StatusLabelWrapper ref={ref} size={size} label={label} type={type} variant={variant} {...rest}>
      {showStatusIcon && <Styled.StatusIcon type={type} iconSize={iconSize} />}

      <Styled.StatusLabel>{label}</Styled.StatusLabel>
    </Styled.StatusLabelWrapper>
  );
};

export default StatusLabel;
