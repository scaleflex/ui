import React from 'react';

import type { TableBodyProps } from './table-body.props';
import Tablelvl2Context from '../table/table-lvl-2-context';
import Styled from './table-body.styles';

const tablelvl2 = {
  variant: 'body',
};

const TableHead = ({ children, ref, ...rest }: TableBodyProps): JSX.Element => (
  <Tablelvl2Context.Provider value={tablelvl2}>
    <Styled.TableBody ref={ref} {...rest}>
      {children}
    </Styled.TableBody>
  </Tablelvl2Context.Provider>
);

export default TableHead;
