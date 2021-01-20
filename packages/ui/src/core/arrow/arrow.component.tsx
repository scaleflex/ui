import React from 'react';
import PT, { Validator } from 'prop-types';
import { iconPropTypes } from '@scaleflex/icons/icon.prop-types';
import type { IconProps } from '@scaleflex/icons/icon.props';
import ArrowIcon from '@scaleflex/icons/arrow';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { ArrowProps } from './arrow.props';
import { Type } from './types';
import Styled from './arrow.styles';

const Arrow = intrinsicComponent<ArrowProps, HTMLSpanElement>((
  {
    IconProps: IconPropsData, ...rest
  }: ArrowProps,
  ref
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
