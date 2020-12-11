import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import type { BadgeProps } from './badge.props';
import { Color } from './types';
import Styled from './badge.styles';

const Badge = intrinsicComponent<BadgeProps, HTMLSpanElement>((
  { badgeContent, ...rest }: BadgeProps,
  ref
): JSX.Element => (
  <Styled.BadgeRoot ref={ref}>
    <Styled.Badge {...rest}>{badgeContent}</Styled.Badge>
  </Styled.BadgeRoot>
));

Badge.defaultProps = {
  color: Color.Secondary,
  inline: false,
};

Badge.propTypes = {
  color: PT.oneOf(objectValues(Color)),
  badgeContent: PT.oneOfType([PT.node, PT.string, PT.number]),
  size: PT.oneOfType([PT.number]),
  fontSize: PT.oneOfType([PT.number, PT.string]),
  padding: PT.oneOfType([PT.number, PT.string]),
  inline: PT.bool,
};

export default Badge;
