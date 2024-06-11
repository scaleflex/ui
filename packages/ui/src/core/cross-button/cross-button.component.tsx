import React from 'react';
import CrossOutline from '@scaleflex/icons/cross-outline';

import { intrinsicComponent } from '../../utils/functions';
import type { CrossButtonProps, CrossButtonSizeType } from './cross-button.props';
import { Size } from './types';
import Styled from './cross-button.styles';

const getIconSize = (sizeName: CrossButtonSizeType | undefined): number => {
  switch (sizeName) {
    case Size.Lg:
      return 16;

    case Size.Xs:
      return 10;

    case Size.Sm:
    default:
      return 12;
  }
};

const CrossButton = intrinsicComponent<CrossButtonProps, HTMLButtonElement>(
  ({ size = Size.Lg, ...rest }: CrossButtonProps, ref): JSX.Element => (
    <Styled.CrossButton size={size} {...rest} ref={ref}>
      <CrossOutline size={getIconSize(size)} />
    </Styled.CrossButton>
  )
);

export default CrossButton;
