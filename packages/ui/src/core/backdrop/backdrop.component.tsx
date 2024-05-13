import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { BackdropProps } from './backdrop.props';
import Styled from './backdrop.styles';

// TODO: add story for this component?
const Backdrop = intrinsicComponent<BackdropProps, HTMLDivElement>(
  ({ ...rest }: BackdropProps, ref): JSX.Element => <Styled.Backdrop {...rest} ref={ref} />
);

Backdrop.propTypes = {};

export default Backdrop;
