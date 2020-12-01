import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import Badge from '../badge';
import type { ButtonProps } from './button.props';
import { Size, Color, Status } from './types';
import Styled from './button.styles';

const Button = intrinsicComponent<ButtonProps, HTMLButtonElement>((
  {
    children, icon, badge, color, size, ...rest
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
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
            ? icon({ size: size === 'lg' ? 16 : (size === 'md' ? 13 : 12) })
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
  status: Status.Stateless,
};

Button.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  color: PT.oneOf(objectValues(Color)),
  status: PT.oneOf(objectValues(Status)),
  icon: PT.oneOfType([PT.node, PT.func]),
  badge: PT.oneOfType([PT.node, PT.number, PT.string]),
};

export default Button;
