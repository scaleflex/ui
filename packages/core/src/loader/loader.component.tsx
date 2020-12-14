import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import CloudWithShadow from '@sfx-ui/icons/cloud-with-shadow';
import SpinnerIcon from '@sfx-ui/icons/spinner';
import type { LoaderProps } from './loader.props';
import Styled from './loader.styles';

const Loader = intrinsicComponent<LoaderProps, HTMLSpanElement>((
  { ...rest },
  ref
): JSX.Element => (
  <Styled.Loader {...rest} ref={ref}>
    <CloudWithShadow size={83} />

    <Styled.Spinner>
      <SpinnerIcon />
    </Styled.Spinner>
  </Styled.Loader>
));

export default Loader;
