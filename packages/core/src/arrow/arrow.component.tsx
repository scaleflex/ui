import React from 'react';
import PT, { Validator } from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import ArrowIcon from '@sfx-ui/icons/arrow';
import { iconPropTypes } from '@sfx-ui/icons/icon.prop-types';
import type { IconProps } from '@sfx-ui/icons/icon.props';
import type { ArrowProps } from './arrow.props';
import { Type } from './types';
import Styled from './arrow.styles';

const Arrow = intrinsicComponent<ArrowProps, HTMLSpanElement>((
  {
    IconProps: IconPropsData, ...rest
  }: ArrowProps,
  ref: React.ForwardedRef<HTMLSpanElement>
): JSX.Element => (
  <Styled.Arrow
    {...rest}
    ref={ref}
  >
    <ArrowIcon {...IconPropsData} />
  </Styled.Arrow>
));

Arrow.defaultProps = {
  type: Type.Right,
};

Arrow.propTypes = {
  type: PT.oneOf(objectValues(Type)),
  IconProps: PT.exact(iconPropTypes) as Validator<IconProps>,
};

export default Arrow;
