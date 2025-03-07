import React from 'react';

import type { TableFooterProps } from './table-footer.props';
import Tablelvl2Context from '../table/table-lvl-2-context';
import Styled from './table-footer.styles';

const tablelvl2 = {
  variant: 'footer',
};

const TableFooter = ({ children, ref, ...rest }: TableFooterProps): JSX.Element => (
  <Tablelvl2Context.Provider value={tablelvl2}>
    <Styled.TableFooter ref={ref} {...rest}>
      {children}
    </Styled.TableFooter>
  </Tablelvl2Context.Provider>
);

export default TableFooter;
