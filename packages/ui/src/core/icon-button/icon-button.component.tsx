import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { getIconSize } from '../button/button.utils';
import type { ButtonSizeType } from '../button/button.props';
import type { IconButtonProps } from './icon-button.props';
import { Size, Color } from './types';
import Styled from './icon-button.styles';

export const getIconSizeWithSquare = (sizeName?: ButtonSizeType, square?: boolean): number => {
  switch (sizeName) {
    case Size.Xl:
      return square ? 18 : 16;

    case Size.Lg:
    case Size.Md:
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
  size: Size.Md,
  color: Color.Secondary,
  square: false,
};

IconButton.propTypes = {
  children: PT.node.isRequired,
  size: PT.oneOf(objectValues(Size)),
  color: PT.oneOf(objectValues(Color)),
  square: PT.bool,
};

export default IconButton;
