import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import Styled from './menu-item.styles';

const MenuItemLabel = intrinsicComponent<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>((
  { children, ...rest },
  ref
): JSX.Element => (
  <Styled.Label
    {...rest}
    ref={ref}
  >
    {children}
  </Styled.Label>
));

MenuItemLabel.displayName = 'MenuItemLabel';

export default MenuItemLabel;
