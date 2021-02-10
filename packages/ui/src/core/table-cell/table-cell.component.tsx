import React, { useContext } from 'react';
import PT, { oneOfType } from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { TableCellProps } from './table-cell.props';
import Tablelvl2Context from '../table/table-lvl-2-context';
import TableContext from '../table/table-context';
import Styled from './table-cell.styles';

const TableCell = intrinsicComponent<TableCellProps, HTMLTableCellElement>((
  {
    align = 'left', padding: paddingProp, size: sizeProp, children, component, scope: scopeProp, ...rest
  }: TableCellProps,
  ref
): JSX.Element => {
  const table = useContext(TableContext);
  const tablelvl2 = useContext(Tablelvl2Context);

  const isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
  let role;
  let Component;
  if (component) {
    Component = component === 'th' ? Styled.TableCellHeader : Styled.TableCellData;
    role = isHeadCell ? 'columnheader' : 'cell';
  } else {
    Component = isHeadCell ? Styled.TableCellHeader : Styled.TableCellData;
  }

  let scope = scopeProp;
  if (!scope && isHeadCell) {
    scope = 'col';
  }

  const padding = paddingProp || (table && table.padding ? table.padding : 'default');
  const size = sizeProp || (table && table.size ? table.size : 'medium');
  return (

    <Component
      ref={ref}
      role={role}
      scope={scope}
      align={align}
      padding={padding}
      size={size}
      {...rest}
    >
      {children}
    </Component>

  );
});

TableCell.defaultProps = {

};

TableCell.propTypes = {
  children: PT.node,
  component: oneOfType([PT.node, PT.string]),
  align: PT.oneOf(['center', 'justify', 'left', 'right']),
  padding: PT.oneOf(['options', 'default', 'none']),
  size: PT.oneOf(['medium', 'small']),
};

export default TableCell;
