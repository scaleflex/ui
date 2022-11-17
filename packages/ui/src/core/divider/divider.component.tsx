import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { DividerProps } from './divider.props';

import Styled from './divider.styles';

const Divder = intrinsicComponent<DividerProps, HTMLHRElement>(
  ({ ...rest }, ref): JSX.Element => <Styled.Divider {...rest} ref={ref} />
);

export const defaultProps = {};

Divder.defaultProps = defaultProps;

export const propTypes = {};

Divder.propTypes = propTypes;

export default Divder;
