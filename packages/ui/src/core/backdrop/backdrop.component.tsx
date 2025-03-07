import React from 'react';

import type { BackdropProps } from './backdrop.props';
import Styled from './backdrop.styles';

// TODO: add story for this component?
const Backdrop = ({ ...rest }: BackdropProps): JSX.Element => <Styled.Backdrop {...rest} />;

export default Backdrop;
