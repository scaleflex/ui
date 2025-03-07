import React, { useContext } from 'react';

import type { DrawerItemButtonProps } from './drawer.props';
import DrawerContext from './drawer.context';
import Styled from './drawer.styles';

const DrawerItemButton = ({ children, selected = false, ref, ...rest }: DrawerItemButtonProps): JSX.Element => {
  const { isCollapsed } = useContext(DrawerContext);
  return (
    <Styled.ItemButton selected={selected} isCollapsed={isCollapsed} {...rest} ref={ref}>
      {children}
    </Styled.ItemButton>
  );
};

export default DrawerItemButton;
