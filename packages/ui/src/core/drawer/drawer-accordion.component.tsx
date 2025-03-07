import React, { useContext } from 'react';

import type { DrawerAccordionProps } from './drawer.props';
import Styled from './drawer.styles';
import DrawerContext from './drawer.context';

// TODO: fix typo
const DrawerAccrodion = ({ children, selected = false, ref, ...rest }: DrawerAccordionProps): JSX.Element => {
  const { isCollapsed } = useContext(DrawerContext);

  return isCollapsed ? (
    <>{children}</>
  ) : (
    <Styled.DrawerAccordion selected={selected} {...rest} ref={ref}>
      {children}
    </Styled.DrawerAccordion>
  );
};

export default DrawerAccrodion;
