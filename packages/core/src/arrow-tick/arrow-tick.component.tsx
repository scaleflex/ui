import React from 'react';
import PT, { Validator } from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import ArrowTickIcon from '@sfx-ui/icons/arrow-tick';
import { iconPropTypes } from '@sfx-ui/icons/icon.prop-types';
import type { IconProps } from '@sfx-ui/icons/icon.props';
import type { ArrowTickProps } from './arrow-tick.props';
import { Type } from './types';
import Styled from './arrow-tick.styles';

const ArrowTick = intrinsicComponent<ArrowTickProps, HTMLSpanElement>((
  {
    IconProps: IconPropsData, ...rest
  }: ArrowTickProps,
  ref
): JSX.Element => (
  <Styled.ArrowTick
    {...rest}
    ref={ref}
  >
    <ArrowTickIcon {...IconPropsData} />
  </Styled.ArrowTick>
));

ArrowTick.defaultProps = {
  type: Type.Right,
};

ArrowTick.propTypes = {
  type: PT.oneOf(objectValues(Type)),
  IconProps: PT.exact(iconPropTypes) as Validator<IconProps>,
};

export default ArrowTick;
