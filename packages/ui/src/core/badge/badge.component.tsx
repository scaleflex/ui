import React from 'react';

import { BadgeColor, BadgeProps } from './badge.props';
import Styled from './badge.styles';

const Badge = ({
  color = BadgeColor.Secondary,
  inline = false,
  badgeContent,
  ref,
  ...rest
}: BadgeProps): JSX.Element => (
  <Styled.BadgeRoot ref={ref}>
    <Styled.Badge color={color} inline={inline} badgeContent={badgeContent} {...rest}>
      {badgeContent}
    </Styled.Badge>
  </Styled.BadgeRoot>
);

export default Badge;
