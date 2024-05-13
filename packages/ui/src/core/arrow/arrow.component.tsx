import React from 'react';
import ArrowIcon from '@scaleflex/icons/arrow';

import { intrinsicComponent } from '../../utils/functions';
import type { ArrowProps } from './arrow.props';
import { Position } from '../../utils/types';
import Styled from './arrow.styles';

const Arrow = intrinsicComponent<ArrowProps, HTMLSpanElement>(
  ({ type = Position.Right, IconProps: IconPropsData, ...rest }: ArrowProps, ref): JSX.Element => (
    <Styled.Arrow {...rest} type={type} ref={ref}>
      <ArrowIcon {...IconPropsData} />
    </Styled.Arrow>
  )
);

export default Arrow;
