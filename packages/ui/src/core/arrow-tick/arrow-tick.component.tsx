import React from 'react';
import ArrowBottom from '@scaleflex/icons/arrow-bottom';

import type { ArrowTickProps } from './arrow-tick.props';
import { Position } from '../../utils/types';
import Styled from './arrow-tick.styles';

const ArrowTick = ({ type = Position.Right, IconProps: IconPropsData, ref, ...rest }: ArrowTickProps): JSX.Element => (
  <Styled.ArrowTick {...rest} type={type} ref={ref}>
    <ArrowBottom {...IconPropsData} />
  </Styled.ArrowTick>
);

export default ArrowTick;
