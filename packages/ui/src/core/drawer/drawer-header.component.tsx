import React, { useContext } from 'react';

import DrawerContext from './drawer.context';
import type { DrawerProps } from './drawer.props';
import Styled from './drawer.styles';

const DrawerHeader = ({ children, ref, ...rest }: DrawerProps): JSX.Element => {
  const { isCollapsed } = useContext(DrawerContext);
  return (
    <Styled.Header {...rest} isCollapsed={isCollapsed} ref={ref}>
      {children}
    </Styled.Header>
  );
};

export default DrawerHeader;
