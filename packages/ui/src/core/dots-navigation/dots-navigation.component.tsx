import React from 'react';

import Dot from '../dot';
import type { DotsNavigationProps } from './dots-navigation.props';
import Styled from './dots-navigation.styles';

const DotsNavigation = ({ activeItem = 0, size, ref, ...rest }: DotsNavigationProps): JSX.Element => (
  <Styled.DotsNavigation ref={ref} {...rest}>
    {[...new Array(size)]
      .map((_item, index) => index)
      .map((index) => (
        <Dot key={index} active={activeItem > -1 && index <= activeItem} />
      ))}
  </Styled.DotsNavigation>
);

export default DotsNavigation;
