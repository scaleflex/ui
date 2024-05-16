import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { TableFooterProps } from './table-footer.props';
import Tablelvl2Context from '../table/table-lvl-2-context';
import Styled from './table-footer.styles';

const tablelvl2 = {
  variant: 'footer',
};

const TableFooter = intrinsicComponent<TableFooterProps, HTMLTableSectionElement>(
  ({ children, ...rest }: TableFooterProps, ref): JSX.Element => (
    <Tablelvl2Context.Provider value={tablelvl2}>
      <Styled.TableFooter ref={ref} {...rest}>
        {children}
      </Styled.TableFooter>
    </Tablelvl2Context.Provider>
  )
);

export default TableFooter;
