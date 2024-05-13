import React, { useContext } from 'react';

import { intrinsicComponent } from '../../utils/functions';
import DrawerContext from './drawer.context';
import type { DrawerProps } from './drawer.props';
import Styled from './drawer.styles';

const DrawerFooter = intrinsicComponent<DrawerProps, HTMLDivElement>(({ children, ...rest }, ref): JSX.Element => {
  const { isCollapsed } = useContext(DrawerContext);
  return (
    <Styled.Footer isCollapsed={isCollapsed} {...rest} ref={ref}>
      {children}
    </Styled.Footer>
  );
});

export default DrawerFooter;
