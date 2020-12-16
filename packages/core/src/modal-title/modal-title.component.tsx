import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import CrossIcon from '@sfx-ui/icons/cross';
import type { ModalTitleProps } from './modal-title.props';
import Styled from './modal-title.styles';
import { Variant } from './types';

const ModalTitle = intrinsicComponent<ModalTitleProps, HTMLDivElement>((
  {
    secondary, onClose, ...rest
  },
  ref
): JSX.Element => (
  <Styled.ModalTitle
    {...rest}
    ref={ref}
  >
    {rest.icon && <Styled.Icon iconShadow={Boolean(rest.iconShadow)}>{rest.icon}</Styled.Icon>}

    <Styled.LabelPrimary variant={rest.variant}>{rest.primary}</Styled.LabelPrimary>

    {rest.variant === Variant.WithIcon && secondary && (
      <Styled.LabelSecondary>{secondary}</Styled.LabelSecondary>
    )}

    <Styled.Close variant={rest.variant} onClick={onClose}>
      <CrossIcon size={8} />
    </Styled.Close>
  </Styled.ModalTitle>
));

ModalTitle.defaultProps = {
  iconShadow: true,
  variant: Variant.Default,
};

ModalTitle.propTypes = {
  primary: PT.node.isRequired,
  secondary: PT.node,
  icon: PT.node,
  iconShadow: PT.bool,
  onClose: PT.func,
  variant: PT.oneOf(objectValues(Variant)),
};

ModalTitle.displayName = 'ModalTitle';

export default ModalTitle;
