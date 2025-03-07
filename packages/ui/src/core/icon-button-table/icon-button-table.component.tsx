import React from 'react';

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

const IconButtonTable = ({ children, size = Size.Md, ref, ...rest }: IconButtonTableProps): JSX.Element => (
  <Styled.IconButtonTable type="button" {...rest} ref={ref}>
    {children && (typeof children === 'function' ? children({ size: getIconSize(size) }) : children)}
  </Styled.IconButtonTable>
);

export default IconButtonTable;
