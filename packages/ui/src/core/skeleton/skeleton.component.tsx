import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
// import { Type } from './types';
import type { SkeletonProps } from './skeleton.props';
import Styled from './skeleton.styles';

const Skeleton = intrinsicComponent<SkeletonProps, HTMLDivElement>(
  ({ width, height, ...rest }: SkeletonProps, ref): JSX.Element => {
    return <Styled.Skeleton width={width} height={height} {...rest} ref={ref} />;
  }
);

Skeleton.defaultProps = {};

Skeleton.propTypes = {
  width: PT.oneOfType([PT.number, PT.string]),
  height: PT.oneOfType([PT.number, PT.string]),
  // type: PT.oneOf(objectValues(Type)),
};

export default Skeleton;
