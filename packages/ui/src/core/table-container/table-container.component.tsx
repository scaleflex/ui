import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { TableContainerProps } from './table-container.props';
import Styled from './table-container.styles';

const TableContainer = intrinsicComponent<TableContainerProps, HTMLDivElement>(
  ({ children, ...rest }: TableContainerProps, ref): JSX.Element => (
    <Styled.TableContainer ref={ref} {...rest}>
      {children}
    </Styled.TableContainer>
  )
);

export default TableContainer;
