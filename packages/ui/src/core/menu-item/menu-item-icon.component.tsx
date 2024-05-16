import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { MenuItemIconProps, MenuItemSizeType } from './menu-item.props';
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

const MenuItemIcon = intrinsicComponent<MenuItemIconProps, HTMLDivElement>(
  ({ children, disabled, size = Size.Md, ...rest }, ref): JSX.Element => (
    <Styled.Icon disabled={disabled} {...rest} ref={ref}>
      {children && typeof children === 'function' ? children({ size: getIconSize(size) }) : children}
    </Styled.Icon>
  )
);

export default MenuItemIcon;
