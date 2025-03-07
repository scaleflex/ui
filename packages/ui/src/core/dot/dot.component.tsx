import React from 'react';
import DotIcon from '@scaleflex/icons/dot';

import type { DotProps } from './dot.props';
import Styled from './dot.styles';

const Dot = ({ active = false, ref, ...rest }: DotProps): JSX.Element => (
  <Styled.Dot ref={ref} $active={active} {...rest}>
    <Styled.Icon $visible={Boolean(active)} $on>
      <DotIcon />
    </Styled.Icon>

    <Styled.Icon $visible={!active}>
      <DotIcon />
    </Styled.Icon>
  </Styled.Dot>
);

export default Dot;
