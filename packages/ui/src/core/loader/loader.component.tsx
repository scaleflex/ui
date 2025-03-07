import React from 'react';
import CloudWithShadow from '@scaleflex/icons/cloud-with-shadow';
import SpinnerIcon from '@scaleflex/icons/spinner';

import type { LoaderProps } from './loader.props';
import Styled from './loader.styles';

const Loader = ({ ...rest }: LoaderProps): JSX.Element => (
  <Styled.Loader {...rest}>
    <CloudWithShadow size={83} />

    <Styled.Spinner>
      <SpinnerIcon />
    </Styled.Spinner>
  </Styled.Loader>
);

export default Loader;
