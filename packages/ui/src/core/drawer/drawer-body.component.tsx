import React from 'react';

import type { DrawerProps } from './drawer.props';
import Styled from './drawer.styles';

const DrawerBody = ({ children, ref, ...rest }: DrawerProps): JSX.Element => (
  <Styled.Body {...rest} ref={ref}>
    {children}
  </Styled.Body>
);

export default DrawerBody;
