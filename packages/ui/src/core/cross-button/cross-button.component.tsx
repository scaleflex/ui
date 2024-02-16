import React from 'react';
import PT from 'prop-types';
import CrossOutline from '@scaleflex/icons/cross-outline';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { CrossButtonProps, CrossButtonSizeType } from './cross-button.props';
import { Size } from './types';
import Styled from './cross-button.styles';

const getIconSize = (sizeName: CrossButtonSizeType | undefined): number => {
  switch (sizeName) {
    case Size.Lg:
      return 16;

    case Size.Sm:
    default:
      return 12;
  }
};

const CrossButton = intrinsicComponent<CrossButtonProps, HTMLButtonElement>(
  ({ ...rest }: CrossButtonProps, ref): JSX.Element => (
    <Styled.CrossButton {...rest} ref={ref}>
      <CrossOutline size={getIconSize(rest.size)} />
    </Styled.CrossButton>
  )
);

CrossButton.defaultProps = {
  size: Size.Lg,
};

CrossButton.propTypes = {
  size: PT.oneOf(objectValues(Size)),
};

export default CrossButton;
