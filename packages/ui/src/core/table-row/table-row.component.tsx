import React from 'react';

import type { TableRowProps } from './table-row.props';
import Styled from './table-row.styles';

const TableRow = ({ children, hover, selected, ref, ...rest }: TableRowProps): JSX.Element => (
  <Styled.TableRow ref={ref} hover={hover} selected={selected} {...rest}>
    {children}
  </Styled.TableRow>
);

export default TableRow;
