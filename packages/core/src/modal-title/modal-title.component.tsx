import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import CrossIcon from '@sfx-ui/icons/cross';
import type { ModalTitleProps } from './modal-title.props';
import Styled from './modal-title.styles';

const ModalTitle = intrinsicComponent<ModalTitleProps, HTMLDivElement>((
  { primary, secondary, onClose, ...rest },
  ref
): JSX.Element => (
  <Styled.ModalTitle
    {...rest}
    ref={ref}
  >
    {rest.icon && <Styled.Icon iconShadow={rest.iconShadow}>{rest.icon}</Styled.Icon>}

    <Styled.LabelPrimary iconMode={Boolean(rest.icon)}>{primary}</Styled.LabelPrimary>

    {rest.icon && secondary && <Styled.LabelSecondary>{secondary}</Styled.LabelSecondary>}

    <Styled.Close iconMode={Boolean(rest.icon)} onClick={onClose}>
      <CrossIcon size={8} />
    </Styled.Close>
  </Styled.ModalTitle>
));

ModalTitle.defaultProps = {
  iconShadow: true,
};

ModalTitle.propTypes = {
  primary: PT.node.isRequired,
  secondary: PT.node,
  icon: PT.node,
  iconShadow: PT.bool,
  onClose: PT.func,
};

ModalTitle.displayName = 'ModalTitle'

export default ModalTitle;
