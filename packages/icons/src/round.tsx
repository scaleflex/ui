import React from 'react';
import type { IconProps } from './icon.props';

export const Round = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <rect y="0.000549316" width="50" height="50" rx="25" fill={color} />
  </svg>
);

export default Round;
