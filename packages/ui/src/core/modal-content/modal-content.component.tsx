import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import type { ModalContentProps } from './modal-content.props';
import Styled from './modal-content.styles';

const ModalContent = intrinsicComponent<ModalContentProps, HTMLDivElement>((
  {
    children, ...rest
  },
  ref
): JSX.Element => (
  <Styled.ModalContent
    {...rest}
    ref={ref}
  >
    {children}
  </Styled.ModalContent>
));

ModalContent.defaultProps = {};

ModalContent.propTypes = {
  children: PT.node.isRequired,
};

ModalContent.displayName = 'ModalContent';

export default ModalContent;
