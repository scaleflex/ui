import React from 'react';
import PT from 'prop-types';
import SpinnerIcon from '@scaleflex/icons/spinner';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import Badge from '../badge';
import type { ButtonProps } from './button.props';
import { Size, Color } from './types';
import { getIconSize } from './button.utils';
import Styled from './button.styles';

const Button = intrinsicComponent<ButtonProps, HTMLButtonElement>((
  {
    children, icon, badge, color, size, loading, ...rest
  }: ButtonProps,
  ref
): JSX.Element => (
  <Styled.Button
    {...rest}
    disabled={loading}
    color={color}
    size={size}
    ref={ref}
  >
    {icon && (
      <Styled.Icon $loading={loading}>
        {
          typeof icon === 'function'
            ? (loading ? <SpinnerIcon size={getIconSize(size)} /> : icon({ size: getIconSize(size) }))
            : (loading ? <SpinnerIcon size={getIconSize(size)} /> : icon)
        }
      </Styled.Icon>
    )}

    {loading && !icon && (
      <Styled.Icon $loading={loading}>
        <SpinnerIcon size={getIconSize(size)} />
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
  loading: PT.bool
};

export default Button;
