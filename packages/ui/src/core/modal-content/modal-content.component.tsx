import React from 'react';

import type { ModalContentProps } from './modal-content.props';
import Styled from './modal-content.styles';

const ModalContent = ({ children, ref, ...rest }: ModalContentProps): JSX.Element => (
  <Styled.ModalContent {...rest} ref={ref}>
    {children}
  </Styled.ModalContent>
);

export default ModalContent;
