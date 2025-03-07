import React from 'react';

import type { TableContainerProps } from './table-container.props';
import Styled from './table-container.styles';

const TableContainer = ({ children, ref, ...rest }: TableContainerProps): JSX.Element => (
  <Styled.TableContainer ref={ref} {...rest}>
    {children}
  </Styled.TableContainer>
);

export default TableContainer;
