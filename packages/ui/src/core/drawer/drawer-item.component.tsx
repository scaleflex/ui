import React, { useContext } from 'react';

import type { DrawerItemProps } from './drawer.props';
import DrawerContext from './drawer.context';
import Styled from './drawer.styles';

const DrawerItem = ({ children, selected = false, ref, ...rest }: DrawerItemProps): JSX.Element => {
  const { isCollapsed } = useContext(DrawerContext);
  return (
    <Styled.Item selected={selected} isCollapsed={isCollapsed} {...rest} ref={ref}>
      {children}
    </Styled.Item>
  );
};

export default DrawerItem;
