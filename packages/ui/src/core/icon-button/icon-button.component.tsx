import React from 'react';

import { getIconSize } from '../button/button.utils';
import type { IconButtonProps } from './icon-button.props';
import { ButtonSize, IconButtonColor } from '../../utils/types';
import Styled from './icon-button.styles';

const IconButton = ({
  children,
  size = ButtonSize.Md,
  color = IconButtonColor.Primary,
  active = false,
  ref,
  ...rest
}: IconButtonProps): JSX.Element => (
  <Styled.IconButton type="button" {...rest} size={size} color={color} $active={active} ref={ref}>
    {children && (typeof children === 'function' ? children({ size: getIconSize(size) }) : children)}
  </Styled.IconButton>
);

export default IconButton;
