import React, { useContext } from 'react';

import type { DrawerItemTextProps } from './drawer.props';
import Styled from './drawer.styles';
import DrawerContext from './drawer.context';

const DrawerItemText = ({ children, font, ref, ...rest }: DrawerItemTextProps): JSX.Element => {
  const { isCollapsed } = useContext(DrawerContext);
  return (
    <Styled.ItemText font={font} isCollapsed={isCollapsed} {...rest} ref={ref}>
      {children}
    </Styled.ItemText>
  );
};

export default DrawerItemText;
