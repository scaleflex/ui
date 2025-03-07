import React from 'react';

import type { ModalTitleProps } from './modal-title.props';
import CrossButton from '../cross-button';
import Styled from './modal-title.styles';
import { Variant } from './types';

const ModalTitle = ({
  secondary,
  onClose,
  primaryLabelStyles,
  iconShadow = true,
  variant = Variant.Default,
  ref,
  ...rest
}: ModalTitleProps): JSX.Element => (
  <Styled.ModalTitle {...rest} variant={variant} ref={ref}>
    {rest.icon && <Styled.Icon iconShadow={Boolean(iconShadow)}>{rest.icon}</Styled.Icon>}

    <Styled.LabelPrimary variant={variant} style={primaryLabelStyles}>
      {rest.primary}
    </Styled.LabelPrimary>

    {variant === Variant.WithIcon && secondary && <Styled.LabelSecondary>{secondary}</Styled.LabelSecondary>}

    <Styled.Close variant={variant}>
      <CrossButton size="lg" onClick={onClose} />
    </Styled.Close>
  </Styled.ModalTitle>
);

export default ModalTitle;
