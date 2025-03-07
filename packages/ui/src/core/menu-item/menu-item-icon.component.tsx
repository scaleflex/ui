import React from 'react';

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

const MenuItemIcon = ({ children, disabled = false, size = Size.Md, ref, ...rest }: MenuItemIconProps): JSX.Element => (
  <Styled.Icon disabled={disabled} {...rest} ref={ref}>
    {children && typeof children === 'function' ? children({ size: getIconSize(size) }) : children}
  </Styled.Icon>
);

export default MenuItemIcon;
