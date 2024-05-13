import React from 'react';
import PT from 'prop-types';

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

TableRow.propTypes = {
  children: PT.node,
  hover: PT.bool,
  selected: PT.bool,
};

export default TableRow;
