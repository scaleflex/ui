import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import { getIconSize } from '../button/button.utils';
import type { IconButtonProps } from './icon-button.props';
import { ButtonSize, IconButtonColor } from '../../utils/types';
import Styled from './icon-button.styles';

const IconButton = intrinsicComponent<IconButtonProps, HTMLButtonElement>(
  (
    { children, size = ButtonSize.Md, color = IconButtonColor.Secondary, active = false, ...rest }: IconButtonProps,
    ref
  ): JSX.Element => (
    <Styled.IconButton {...rest} size={size} color={color} $active={active} ref={ref}>
      {children && (typeof children === 'function' ? children({ size: getIconSize(size) }) : children)}
    </Styled.IconButton>
  )
);

export default IconButton;
