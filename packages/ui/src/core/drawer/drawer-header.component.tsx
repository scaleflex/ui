import React, { useContext } from 'react';

import { intrinsicComponent } from '../../utils/functions';
import DrawerContext from './drawer.context';
import type { DrawerProps } from './drawer.props';
import Styled from './drawer.styles';

const DrawerHeader = intrinsicComponent<DrawerProps, HTMLDivElement>(({ children, ...rest }, ref): JSX.Element => {
  const { isCollapsed } = useContext(DrawerContext);
  return (
    <Styled.Header {...rest} isCollapsed={isCollapsed} ref={ref}>
      {children}
    </Styled.Header>
  );
});

DrawerHeader.defaultProps = {};

DrawerHeader.propTypes = {};

export default DrawerHeader;
