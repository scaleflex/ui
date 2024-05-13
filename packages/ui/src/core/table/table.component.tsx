import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { TableProps } from './table.props';
import TableContext from './table-context';
import Styled from './table.styles';

const Table = intrinsicComponent<TableProps, HTMLTableElement>(
  ({ children, padding = 'default', size = 'medium', ...rest }: TableProps, ref): JSX.Element => {
    const table = React.useMemo(() => ({ padding, size }), [padding, size]);
    return (
      <TableContext.Provider value={table}>
        <Styled.Table ref={ref} {...rest}>
          {children}
        </Styled.Table>
      </TableContext.Provider>
    );
  }
);

Table.propTypes = {
  children: PT.node,
  padding: PT.oneOf(['options', 'default', 'none']),
  size: PT.oneOf(['medium', 'small']),
};

export default Table;
