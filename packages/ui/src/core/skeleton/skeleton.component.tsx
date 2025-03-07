import React from 'react';

import type { SkeletonProps } from './skeleton.props';
import Styled from './skeleton.styles';

const Skeleton = ({ width, height, ref, ...rest }: SkeletonProps): JSX.Element => {
  return <Styled.Skeleton width={width} height={height} {...rest} ref={ref} />;
};

export default Skeleton;
