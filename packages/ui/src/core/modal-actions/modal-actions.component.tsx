import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { ModalActionsProps } from './modal-actions.props';
import Styled from './modal-actions.styles';
import { Align } from './types';

const ModalActions = intrinsicComponent<ModalActionsProps, HTMLDivElement>(
  ({ children, align = Align.Center, ...rest }, ref): JSX.Element => (
    <Styled.ModalActions {...rest} align={align} ref={ref}>
      {children}
    </Styled.ModalActions>
  )
);

ModalActions.propTypes = {
  children: PT.node.isRequired,
  align: PT.oneOf(objectValues(Align)),
};

ModalActions.displayName = 'ModalActions';

export default ModalActions;
