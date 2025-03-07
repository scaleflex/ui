import React from 'react';

import type { ModalActionsProps } from './modal-actions.props';
import Styled from './modal-actions.styles';
import { Align } from './types';

const ModalActions = ({ children, align = Align.Center, ref, ...rest }: ModalActionsProps): JSX.Element => (
  <Styled.ModalActions {...rest} align={align} ref={ref}>
    {children}
  </Styled.ModalActions>
);

export default ModalActions;
