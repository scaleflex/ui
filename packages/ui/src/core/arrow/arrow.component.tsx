import React from 'react';
import ArrowIcon from '@scaleflex/icons/arrow';

import type { ArrowProps } from './arrow.props';
import { Position } from '../../utils/types';
import Styled from './arrow.styles';

const Arrow = ({ type = Position.Right, IconProps: IconPropsData, ref, ...rest }: ArrowProps): JSX.Element => (
  <Styled.Arrow {...rest} type={type} ref={ref}>
    <ArrowIcon {...IconPropsData} />
  </Styled.Arrow>
);

export default Arrow;
