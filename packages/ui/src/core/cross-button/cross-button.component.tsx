import React from 'react';
import PT from 'prop-types';

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
  ({ children, size }: CrossButtonProps, ref): JSX.Element => (
    <Styled.CrossButton ref={ref} size={size}>
      {children && (typeof children === 'function' ? children({ size: getIconSize(size) }) : children)}
    </Styled.CrossButton>
  )
);

CrossButton.defaultProps = {
  size: Size.Lg,
};

CrossButton.propTypes = {
  children: PT.oneOfType([PT.node, PT.func]).isRequired,
  size: PT.oneOf(objectValues(Size)),
};

export default CrossButton;
