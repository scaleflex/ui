import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { DrawerProps } from './drawer.props';
import Styled from './drawer.styles';

const DrawerFooter = intrinsicComponent<DrawerProps, HTMLDivElement>(
  ({ children, ...rest }, ref): JSX.Element => (
    <Styled.Footer {...rest} ref={ref}>
      {children}
    </Styled.Footer>
  )
);

DrawerFooter.defaultProps = {};

DrawerFooter.propTypes = {};

export default DrawerFooter;
