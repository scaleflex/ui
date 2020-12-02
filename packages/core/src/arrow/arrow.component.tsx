import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import ArrowIcon from '@sfx-ui/icons/arrow';
import type { ArrowProps } from './arrow.props';
import { Type } from './types';
import Styled from './arrow.styles';

const Arrow = intrinsicComponent<ArrowProps, HTMLSpanElement>((
  {
    ...rest
  }: ArrowProps,
  ref: React.ForwardedRef<HTMLSpanElement>
): JSX.Element => (
  <Styled.Arrow
    ref={ref}
    {...rest}
  >
    <ArrowIcon />
  </Styled.Arrow>
));

Arrow.defaultProps = {
  type: Type.Right,
};

Arrow.propTypes = {
  type: PT.oneOf(objectValues(Type)),
};

export default Arrow;
