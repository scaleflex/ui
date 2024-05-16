import React, { useContext } from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { DrawerItemTextProps } from './drawer.props';
import Styled from './drawer.styles';
import DrawerContext from './drawer.context';

const DrawerItemText = intrinsicComponent<DrawerItemTextProps, HTMLDivElement>(
  ({ children, font, ...rest }, ref): JSX.Element => {
    const { isCollapsed } = useContext(DrawerContext);
    return (
      <Styled.ItemText font={font} isCollapsed={isCollapsed} {...rest} ref={ref}>
        {children}
      </Styled.ItemText>
    );
  }
);

export default DrawerItemText;
