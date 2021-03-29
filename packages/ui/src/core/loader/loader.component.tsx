import React from 'react';
import CloudWithShadow from '@scaleflex/icons/cloud-with-shadow';
import SpinnerIcon from '@scaleflex/icons/spinner';
import { intrinsicComponent } from '../../utils/functions';
import type { LoaderProps } from './loader.props';
import Styled from './loader.styles';

const Loader = intrinsicComponent<LoaderProps, HTMLSpanElement>(
  ({ ...rest }, ref): JSX.Element => (
    <Styled.Loader {...rest} ref={ref}>
      <CloudWithShadow size={83} />

      <Styled.Spinner>
        <SpinnerIcon />
      </Styled.Spinner>
    </Styled.Loader>
  )
);

export default Loader;
