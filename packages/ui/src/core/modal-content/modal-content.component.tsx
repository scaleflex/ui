import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { ModalContentProps } from './modal-content.props';
import Styled from './modal-content.styles';

const ModalContent = intrinsicComponent<ModalContentProps, HTMLDivElement>(
  ({ children, ...rest }: ModalContentProps, ref): JSX.Element => (
    <Styled.ModalContent {...rest} ref={ref}>
      {children}
    </Styled.ModalContent>
  )
);

ModalContent.displayName = 'ModalContent';

export default ModalContent;
