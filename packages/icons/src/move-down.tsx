import React from 'react';
import type { IconProps } from './icon.props';

export const MoveDown = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M28.8315 0V30.2706H41.2074L24.6037 50L8 30.2706H20.376V0H28.8315Z" fill={color} />
  </svg>
);

export default MoveDown;
