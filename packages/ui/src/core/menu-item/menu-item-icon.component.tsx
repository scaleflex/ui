import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
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

MenuItemIcon.defaultProps = {
  size: Size.Md,
};

MenuItemIcon.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  children: PT.oneOfType([PT.node, PT.func]).isRequired,
  disabled: PT.bool,
};

export default MenuItemIcon;
