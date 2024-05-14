import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { SkeletonProps } from './skeleton.props';
import Styled from './skeleton.styles';

const Skeleton = intrinsicComponent<SkeletonProps, HTMLDivElement>(
  ({ width, height, ...rest }: SkeletonProps, ref): JSX.Element => {
    return <Styled.Skeleton width={width} height={height} {...rest} ref={ref} />;
  }
);

export default Skeleton;
