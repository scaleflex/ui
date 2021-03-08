import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { TableHeadProps } from './table-head.props';
import Tablelvl2Context from '../table/table-lvl-2-context';
import Styled from './table-head.styles';

const tablelvl2 = {
  variant: 'head',
};

const TableHead = intrinsicComponent<TableHeadProps, HTMLTableSectionElement>(
  ({ children, ...rest }: TableHeadProps, ref): JSX.Element => (
    <Tablelvl2Context.Provider value={tablelvl2}>
      <Styled.TableHead ref={ref} {...rest}>
        {children}
      </Styled.TableHead>
    </Tablelvl2Context.Provider>
  )
);

TableHead.propTypes = {
  children: PT.node,
};

export default TableHead;
