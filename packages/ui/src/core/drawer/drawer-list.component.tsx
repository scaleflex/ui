import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { DrawerListProps } from './drawer.props';
import Styled from './drawer.styles';

const DrawerList = intrinsicComponent<DrawerListProps, HTMLUListElement>(({ children, ...rest }, ref): JSX.Element => {
  return (
    <Styled.List {...rest} ref={ref}>
      {children}
    </Styled.List>
  );
});

DrawerList.propTypes = {};

export default DrawerList;
