import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import CloudIcon from '@sfx-ui/icons/cloud';
import SpinnerIcon from '@sfx-ui/icons/spinner';
import type { LoaderProps } from './loader.props';
import Styled from './loader.styles';

const Loader = intrinsicComponent<LoaderProps, HTMLSpanElement>((
  { ...rest },
  ref
): JSX.Element => (
  <Styled.Loader {...rest} ref={ref}>
    <CloudIcon />

    <Styled.Spinner>
      <SpinnerIcon />
    </Styled.Spinner>
  </Styled.Loader>
));

export default Loader;
