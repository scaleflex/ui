import React from 'react';
import type { IconProps } from './icon.props';

export const ArrowTick = ({ color = 'currentColor', size = 8, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M37.2754 25L12.2754 -1.03614e-06L12.2754 50L37.2754 25Z" fill={color} />
  </svg>
);

export default ArrowTick;
