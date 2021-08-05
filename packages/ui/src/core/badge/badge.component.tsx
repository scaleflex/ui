import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { BadgeProps } from './badge.props';
import { BadgeColor } from '../../utils/types';
import Styled from './badge.styles';

const Badge = intrinsicComponent<BadgeProps, HTMLSpanElement>(
  ({ badgeContent, ...rest }: BadgeProps, ref): JSX.Element => (
    <Styled.BadgeRoot ref={ref}>
      <Styled.Badge {...rest}>{badgeContent}</Styled.Badge>
    </Styled.BadgeRoot>
  )
);

Badge.defaultProps = {
  color: BadgeColor.Secondary,
  inline: false,
};

Badge.propTypes = {
  color: PT.oneOf(objectValues(BadgeColor)),
  badgeContent: PT.node,
  size: PT.oneOfType([PT.number]),
  fontSize: PT.oneOfType([PT.number, PT.string]),
  padding: PT.oneOfType([PT.number, PT.string]),
  inline: PT.bool,
};

export default Badge;
