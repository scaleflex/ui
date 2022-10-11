import React from 'react';
import PT, { Validator } from 'prop-types';
import ArrowBottom from '@scaleflex/icons/arrow-bottom';
import { iconPropTypes } from '@scaleflex/icons/icon.prop-types';
import type { IconProps } from '@scaleflex/icons/icon.props';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { ArrowTickProps } from './arrow-tick.props';
import { Position } from '../../utils/types';
import Styled from './arrow-tick.styles';

const ArrowTick = intrinsicComponent<ArrowTickProps, HTMLSpanElement>(
  ({ IconProps: IconPropsData, ...rest }: ArrowTickProps, ref): JSX.Element => (
    <Styled.ArrowTick {...rest} ref={ref}>
      <ArrowBottom {...IconPropsData} />
    </Styled.ArrowTick>
  )
);

ArrowTick.defaultProps = {
  type: Position.Right,
};

ArrowTick.propTypes = {
  type: PT.oneOf(objectValues(Position)),
  IconProps: PT.exact(iconPropTypes) as Validator<IconProps>,
};

export default ArrowTick;
