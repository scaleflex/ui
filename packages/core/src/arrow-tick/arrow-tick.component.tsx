import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import ArrowTickIcon from '@sfx-ui/icons/arrow-tick';
import type { ArrowTickProps } from './arrow-tick.props';
import { Type } from './types';
import Styled from './arrow-tick.styles';

const ArrowTick = intrinsicComponent<ArrowTickProps, HTMLSpanElement>((
  {
    ...rest
  }: ArrowTickProps,
  ref: React.ForwardedRef<HTMLSpanElement>
): JSX.Element => (
  <Styled.ArrowTick
    ref={ref}
    {...rest}
  >
    <ArrowTickIcon />
  </Styled.ArrowTick>
));

ArrowTick.defaultProps = {
  type: Type.Right,
};

ArrowTick.propTypes = {
  type: PT.oneOf(objectValues(Type)),
};

export default ArrowTick;
