import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { TableRowProps } from './table-row.props';
import Styled from './table-row.styles';

const TableRow = intrinsicComponent<TableRowProps, HTMLTableRowElement>(
  ({ children, hover, selected, ...rest }: TableRowProps, ref): JSX.Element => (
    <Styled.TableRow ref={ref} hover={hover} selected={selected} {...rest}>
      {children}
    </Styled.TableRow>
  )
);

export default TableRow;
