import React, { useContext } from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { DrawerItemButtonProps } from './drawer.props';
import DrawerContext from './drawer.context';
import Styled from './drawer.styles';

const DrawerItemButton = intrinsicComponent<DrawerItemButtonProps, HTMLDivElement>(
  ({ children, selected, ...rest }, ref): JSX.Element => {
    const { isCollapsed } = useContext(DrawerContext);
    return (
      <Styled.ItemButton selected={selected} isCollapsed={isCollapsed} {...rest} ref={ref}>
        {children}
      </Styled.ItemButton>
    );
  }
);

DrawerItemButton.defaultProps = {
  selected: false,
};

DrawerItemButton.propTypes = {
  selected: PT.bool,
};

export default DrawerItemButton;
