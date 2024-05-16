import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { DrawerProps } from './drawer.props';
import Styled from './drawer.styles';

const DrawerBody = intrinsicComponent<DrawerProps, HTMLDivElement>(
  ({ children, ...rest }, ref): JSX.Element => (
    <Styled.Body {...rest} ref={ref}>
      {children}
    </Styled.Body>
  )
);

export default DrawerBody;
