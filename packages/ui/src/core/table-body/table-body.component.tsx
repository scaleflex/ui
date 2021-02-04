import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { TableBodyProps } from './table-body.props';
import Tablelvl2Context from '../table/table-lvl-2-context';
import Styled from './table-body.styles';


const tablelvl2 = {
  variant: 'body',
};

const TableHead = intrinsicComponent<TableBodyProps, HTMLTableSectionElement>((
  {
    children, ...rest
  }: TableBodyProps,
  ref
): JSX.Element => (
  <Tablelvl2Context.Provider value={tablelvl2}>
    <Styled.TableBody
      ref={ref}
      {...rest}
    >
      {children}
    </Styled.TableBody>
  </Tablelvl2Context.Provider>
));

TableHead.defaultProps = {

};

TableHead.propTypes = {
  children: PT.node
};

export default TableHead;
