import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import { BadgeColor, BadgeProps } from './badge.props';
import Styled from './badge.styles';

const Badge = intrinsicComponent<BadgeProps, HTMLSpanElement>(
  ({ color = BadgeColor.Secondary, inline = false, badgeContent, ...rest }: BadgeProps, ref): JSX.Element => (
    <Styled.BadgeRoot ref={ref}>
      <Styled.Badge {...rest}>{badgeContent}</Styled.Badge>
    </Styled.BadgeRoot>
  )
);

Badge.propTypes = {
  color: PT.oneOf(objectValues(BadgeColor)),
  badgeContent: PT.node,
  size: PT.oneOfType([PT.number]),
  fontSize: PT.oneOfType([PT.number, PT.string]),
  padding: PT.oneOfType([PT.number, PT.string]),
  inline: PT.bool,
};

export default Badge;
