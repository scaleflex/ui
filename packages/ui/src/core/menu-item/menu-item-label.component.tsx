import React from 'react';

import type { MenuItemLabelProps } from './menu-item-label.props';
import Styled from './menu-item.styles';

const MenuItemLabel = ({ children, ref, ...rest }: MenuItemLabelProps): JSX.Element => (
  <Styled.Label {...rest} ref={ref}>
    {children}
  </Styled.Label>
);

export default MenuItemLabel;
