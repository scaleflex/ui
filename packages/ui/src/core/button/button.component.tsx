import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import Badge from '../badge';
import type { ButtonProps } from './button.props';
import { Size, Color } from './types';
import { getIconSize } from './button.utils';
import Styled from './button.styles';

const Button = intrinsicComponent<ButtonProps, HTMLButtonElement>((
  {
    children, icon, badge, color, size, ...rest
  }: ButtonProps,
  ref
): JSX.Element => (
  <Styled.Button
    {...rest}
    color={color}
    size={size}
    ref={ref}
  >
    {icon && (
      <Styled.Icon>
        {
          typeof icon === 'function'
            ? icon({ size: getIconSize(size) })
            : icon
        }
      </Styled.Icon>
    )}

    <Styled.Label>{children}</Styled.Label>

    {badge && (
      <Styled.Badge>
        <Badge
          inline
          size={14}
          fontSize={10}
          padding="0 1px"
          badgeContent={badge}
          color={color === Color.Primary ? 'white' : 'secondary'}
        />
      </Styled.Badge>
    )}
  </Styled.Button>
));

Button.defaultProps = {
  size: Size.Md,
  color: Color.Secondary,
};

Button.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  color: PT.oneOf(objectValues(Color)),
  icon: PT.oneOfType([PT.node, PT.func]),
  badge: PT.node,
};

export default Button;
