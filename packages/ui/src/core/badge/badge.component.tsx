import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import { BadgeColor, BadgeProps } from './badge.props';
import Styled from './badge.styles';

const Badge = intrinsicComponent<BadgeProps, HTMLSpanElement>(
  ({ color = BadgeColor.Secondary, inline = false, badgeContent, ...rest }: BadgeProps, ref): JSX.Element => (
    <Styled.BadgeRoot ref={ref}>
      <Styled.Badge color={color} inline={inline} badgeContent ={badgeContent} {...rest}>{badgeContent}</Styled.Badge>
    </Styled.BadgeRoot>
  )
);

export default Badge;
