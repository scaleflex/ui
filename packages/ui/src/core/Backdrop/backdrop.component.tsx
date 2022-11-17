import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { BackdropProps } from './backdrop.props';
import Styled from './backdrop.styles';

const Backdrop = intrinsicComponent<BackdropProps, HTMLDivElement>(
  ({ ...rest }: BackdropProps, ref): JSX.Element => <Styled.Backdrop {...rest} ref={ref} />
);

Backdrop.defaultProps = {};

Backdrop.propTypes = {};

export default Backdrop;
