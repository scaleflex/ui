import React, { useContext } from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { DrawerAccordionProps } from './drawer.props';
import Styled from './drawer.styles';
import DrawerContext from './drawer.context';

const DrawerAccrodion = intrinsicComponent<DrawerAccordionProps, HTMLDivElement>(
  ({ children, selected, ...rest }, ref): JSX.Element => {
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

DrawerAccrodion.defaultProps = {
  selected: false,
};

DrawerAccrodion.propTypes = {
  selected: PT.bool,
};

export default DrawerAccrodion;
