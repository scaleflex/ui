import React, { useContext } from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { DrawerIconProps } from './drawer.props';
import Styled from './drawer.styles';
import DrawerContext from './drawer.context';

const DrawerItemIcon = intrinsicComponent<DrawerIconProps, HTMLSpanElement>(
  ({ children, size: iconSize = 20, ...rest }, ref): JSX.Element => {
    const { isCollapsed, size } = useContext(DrawerContext);

    return (
      <Styled.Icon {...rest} isCollapsed={isCollapsed} ref={ref}>
        {children && typeof children === 'function' ? children({ size: size || iconSize }) : children}
      </Styled.Icon>
    );
  }
);

DrawerItemIcon.propTypes = {
  size: PT.number,
  children: PT.oneOfType([PT.node, PT.func]).isRequired,
};

export default DrawerItemIcon;
