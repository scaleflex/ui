import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { MenuItemActionsProps, MenuItemSizeType } from './menu-item.props';
import { Size } from './types';
import Styled from './menu-item.styles';

const getIconSize = (sizeName: MenuItemSizeType | undefined): number => {
  switch (sizeName) {
    case Size.Md:
      return 16;

    case Size.Sm:
    default:
      return 14;
  }
};

const MenuItemActions = intrinsicComponent<MenuItemActionsProps, HTMLDivElement>(
  ({ children, ...rest }, ref): JSX.Element => (
    <Styled.Actions {...rest} ref={ref}>
      {children && typeof children === 'function' ? children({ size: getIconSize(rest.size) }) : children}
    </Styled.Actions>
  )
);

MenuItemActions.displayName = 'MenuItemActions';

export default MenuItemActions;
