import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Size, type IconButtonTableProps, type IconButtonTableSizeType } from './icon-button-table.props';
import Styled from './icon-button-table.styles';

const getIconSize = (sizeName: IconButtonTableSizeType | undefined): number => {
  switch (sizeName) {
    case Size.Sm:
      return 12;

    case Size.Md:
    default:
      return 14;
  }
};

const IconButtonTable = intrinsicComponent<IconButtonTableProps, HTMLButtonElement>(
  ({ children, size = Size.Md, ...rest }: IconButtonTableProps, ref): JSX.Element => (
    <Styled.IconButtonTable {...rest} ref={ref}>
      {children && (typeof children === 'function' ? children({ size: getIconSize(size) }) : children)}
    </Styled.IconButtonTable>
  )
);

IconButtonTable.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  children: PT.oneOfType([PT.node, PT.func]).isRequired,
};

export default IconButtonTable;
