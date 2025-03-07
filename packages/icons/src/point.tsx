import React from 'react';
import type { IconProps } from './icon.props';

export const Point = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <circle cx="25" cy="25" r="8.33333" fill={color} />
  </svg>
);

export default Point;
