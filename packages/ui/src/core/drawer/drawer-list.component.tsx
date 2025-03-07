import React from 'react';

import type { DrawerListProps } from './drawer.props';
import Styled from './drawer.styles';

const DrawerList = ({ children, ref, ...rest }: DrawerListProps): JSX.Element => {
  return (
    <Styled.List {...rest} ref={ref}>
      {children}
    </Styled.List>
  );
};

export default DrawerList;
