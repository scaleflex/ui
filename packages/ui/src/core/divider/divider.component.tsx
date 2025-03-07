import React from 'react';

import type { DividerProps } from './divider.props';
import Styled from './divider.styles';

const Divider = ({ ...rest }: DividerProps): JSX.Element => <Styled.Divider {...rest} />;

export default Divider;
