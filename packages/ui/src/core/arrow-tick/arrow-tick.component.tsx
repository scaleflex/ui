import React from 'react';
import ArrowBottom from '@scaleflex/icons/arrow-bottom';

import { intrinsicComponent } from '../../utils/functions';
import type { ArrowTickProps } from './arrow-tick.props';
import { Position } from '../../utils/types';
import Styled from './arrow-tick.styles';

const ArrowTick = intrinsicComponent<ArrowTickProps, HTMLSpanElement>(
  ({ type = Position.Right, IconProps: IconPropsData, ...rest }: ArrowTickProps, ref): JSX.Element => (
    <Styled.ArrowTick {...rest} type={type} ref={ref}>
      <ArrowBottom {...IconPropsData} />
    </Styled.ArrowTick>
  )
);

export default ArrowTick;
