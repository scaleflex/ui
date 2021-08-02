import React from 'react';
import PT from 'prop-types';
import DotIcon from '@scaleflex/icons/dot';

import { intrinsicComponent } from '../../utils/functions';
import type { DotProps } from './dot.props';
import Styled from './dot.styles';

const Dot = intrinsicComponent<DotProps, HTMLSpanElement>(
  ({ active, ...rest }: DotProps, ref): JSX.Element => (
    <Styled.Dot ref={ref} active={active} {...rest}>
      <Styled.Icon visible={Boolean(active)} on>
        <DotIcon />
      </Styled.Icon>

      <Styled.Icon visible={!active}>
        <DotIcon />
      </Styled.Icon>
    </Styled.Dot>
  )
);

Dot.defaultProps = {
  active: false,
};

Dot.propTypes = {
  active: PT.bool,
};

export default Dot;
