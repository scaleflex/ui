import React from 'react';

import type { TableHeadProps } from './table-head.props';
import Tablelvl2Context from '../table/table-lvl-2-context';
import Styled from './table-head.styles';

const tablelvl2 = {
  variant: 'head',
};

const TableHead = ({ children, ref, ...rest }: TableHeadProps): JSX.Element => (
  <Tablelvl2Context.Provider value={tablelvl2}>
    <Styled.TableHead ref={ref} {...rest}>
      {children}
    </Styled.TableHead>
  </Tablelvl2Context.Provider>
);

export default TableHead;
