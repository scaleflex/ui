import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import DotIcon from '@sfx-ui/icons/dot';
import DotOffIcon from '@sfx-ui/icons/dot-off';
import type { DotProps } from './dot.props';
import Styled from './dot.styles';

const Dot = intrinsicComponent<DotProps, HTMLSpanElement>((
  {
    active, ...rest
  }: DotProps,
  ref: React.ForwardedRef<HTMLSpanElement>
): JSX.Element => (
  <Styled.Dot
    ref={ref}
    active={active}
    {...rest}
  >
    <Styled.Icon visible={active}>
      <DotIcon />
    </Styled.Icon>

    <Styled.Icon visible={!active}>
      <DotOffIcon />
    </Styled.Icon>
  </Styled.Dot>
));

Dot.defaultProps = {
  active: false,
};

Dot.propTypes = {
  active: PT.bool,
};

export default Dot;
