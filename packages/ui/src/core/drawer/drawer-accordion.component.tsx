import React, { useContext } from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { DrawerAccordionProps } from './drawer.props';
import Styled from './drawer.styles';
import DrawerContext from './drawer.context';

// TODO: fix typo
const DrawerAccrodion = intrinsicComponent<DrawerAccordionProps, HTMLDivElement>(
  ({ children, selected = false, ...rest }, ref): JSX.Element => {
    const { isCollapsed } = useContext(DrawerContext);

    return isCollapsed ? (
      <>{children}</>
    ) : (
      <Styled.DrawerAccordion selected={selected} {...rest} ref={ref}>
        {children}
      </Styled.DrawerAccordion>
    );
  }
);

export default DrawerAccrodion;
