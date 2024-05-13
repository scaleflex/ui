import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { DividerProps } from './divider.props';
import Styled from './divider.styles';

const Divider = intrinsicComponent<DividerProps, HTMLHRElement>(
  ({ ...rest }, ref): JSX.Element => <Styled.Divider {...rest} ref={ref} />
);

export const propTypes = {};

Divider.propTypes = propTypes;

export default Divider;
