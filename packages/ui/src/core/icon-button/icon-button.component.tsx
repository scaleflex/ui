import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import { getIconSize } from '../button/button.utils';
import type { ButtonSizeType } from '../button/button.props';
import type { IconButtonProps } from './icon-button.props';
import { ButtonSize, ButtonColor } from '../../utils/types';
import Styled from './icon-button.styles';

export const getIconSizeWithSquare = (sizeName?: ButtonSizeType, square?: boolean): number => {
  switch (sizeName) {
    case ButtonSize.Xl:
      return square ? 18 : 16;

    case ButtonSize.Lg:
    case ButtonSize.Md:
      return square ? 16 : 14;

    default:
      return getIconSize(sizeName);
  }
};

const IconButton = intrinsicComponent<IconButtonProps, HTMLButtonElement>(
  ({ children, ...rest }: IconButtonProps, ref): JSX.Element => (
    <Styled.IconButton {...rest} ref={ref}>
      {children &&
        (typeof children === 'function' ? children({ size: getIconSizeWithSquare(rest.size, rest.square) }) : children)}
    </Styled.IconButton>
  )
);

IconButton.defaultProps = {
  size: ButtonSize.Md,
  color: ButtonColor.Secondary,
  square: false,
};

IconButton.propTypes = {
  children: PT.oneOfType([PT.node, PT.func]).isRequired,
  size: PT.oneOf(objectValues(ButtonSize)),
  color: PT.oneOf(objectValues(ButtonColor)),
  square: PT.bool,
};

export default IconButton;
