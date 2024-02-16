import React from 'react';
import PT from 'prop-types';
import More from '@scaleflex/icons/more';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { IconButtonTableProps, IconButtonTableSizeType } from './icon-button-table.props';
import { Size } from './types';
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
  ({ ...rest }: IconButtonTableProps, ref): JSX.Element => (
    <Styled.IconButtonTable {...rest} ref={ref}>
      <More size={getIconSize(rest.size)} />
    </Styled.IconButtonTable>
  )
);

IconButtonTable.defaultProps = {
  size: Size.Md,
};

IconButtonTable.propTypes = {
  size: PT.oneOf(objectValues(Size)),
};

export default IconButtonTable;
