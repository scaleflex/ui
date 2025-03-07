import React from 'react';
import type { IconProps } from './icon.props';

export const MoreVertical = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 10 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M0.192324 4.9779C0.192323 7.72712 2.3448 9.9558 5.00002 9.9558C7.65523 9.9558 9.80771 7.72712 9.80771 4.9779C9.80771 2.22868 7.65523 1.16063e-07 5.00002 0C2.3448 -1.16063e-07 0.192324 2.22868 0.192324 4.9779Z"
      fill={color}
    />
    <path
      d="M0.192323 25.0002C0.192323 27.7494 2.3448 29.9781 5.00001 29.9781C7.65523 29.9781 9.80771 27.7494 9.80771 25.0002C9.80771 22.251 7.65523 20.0223 5.00002 20.0223C2.3448 20.0223 0.192323 22.251 0.192323 25.0002Z"
      fill={color}
    />
    <path
      d="M0.192322 45.0221C0.192322 47.7713 2.3448 50 5.00001 50C7.65523 50 9.80771 47.7713 9.80771 45.0221C9.80771 42.2729 7.65523 40.0442 5.00001 40.0442C2.3448 40.0442 0.192322 42.2729 0.192322 45.0221Z"
      fill={color}
    />
  </svg>
);

export default MoreVertical;
