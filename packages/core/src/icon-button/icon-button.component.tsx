import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import { getIconSize } from '../button/button.utils';
import type { IconButtonProps } from './icon-button.props';
import { Size, Color } from './types';
import Styled from './icon-button.styles';

const IconButton = intrinsicComponent<IconButtonProps, HTMLButtonElement>((
  {
    children, color, size, ...rest
  }: IconButtonProps,
  ref
): JSX.Element => (
  <Styled.IconButton
    {...rest}
    color={color}
    size={size}
    ref={ref}
  >
    {children && (
      typeof children === 'function'
        ? children({ size: getIconSize(size) })
        : children
    )}
  </Styled.IconButton>
));

IconButton.defaultProps = {
  size: Size.Md,
  color: Color.Secondary,
};

IconButton.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  color: PT.oneOf(objectValues(Color)),
  children: PT.node.isRequired,
};

export default IconButton;
