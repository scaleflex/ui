import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { ModalActionsProps } from './modal-actions.props';
import Styled from './modal-actions.styles';
import { Align } from './types';

const ModalActions = intrinsicComponent<ModalActionsProps, HTMLDivElement>(
  ({ children, align = Align.Center, ...rest }: ModalActionsProps, ref): JSX.Element => (
    <Styled.ModalActions {...rest} align={align} ref={ref}>
      {children}
    </Styled.ModalActions>
  )
);

ModalActions.displayName = 'ModalActions';

export default ModalActions;
