import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { TableContainerProps } from './table-container.props';
import Styled from './table-container.styles';


const TableContainer = intrinsicComponent<TableContainerProps, HTMLDivElement>((
  {
    children, ...rest
  }: TableContainerProps,
  ref
): JSX.Element => (
  <Styled.TableContainer
    ref={ref}
    {...rest}
  >
    {children}
  </Styled.TableContainer>
));



TableContainer.propTypes = {
  children: PT.node
};

export default TableContainer;
