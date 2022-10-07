import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { StatusLabelProps } from './status-label.props';
import { Size, Type, Variant } from './types';
import Styled from './status-label.styles';

const StatusLabel = intrinsicComponent<StatusLabelProps, HTMLDivElement>(
  ({ label, variant = Variant.Filled, type = Type.Default, size, ...rest }: StatusLabelProps, ref): JSX.Element => (
    <Styled.StatusLabelWrapper ref={ref} size={size} label={label} type={type} variant={variant} {...rest}>
      {type !== Type.Default && <Styled.StatusIcon type={type} />}

      <Styled.StatusLabel>{label}</Styled.StatusLabel>
    </Styled.StatusLabelWrapper>
  )
);

StatusLabel.defaultProps = {
  label: '',
  type: Type.Default,
  size: Size.Md,
  variant: Variant.Filled,
};

StatusLabel.propTypes = {
  label: PT.node.isRequired,
  type: PT.oneOf(objectValues(Type)),
  size: PT.oneOf(objectValues(Size)),
  variant: PT.oneOf(objectValues(Variant)),
};

export default StatusLabel;
