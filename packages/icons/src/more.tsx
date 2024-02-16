import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const More = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M4.97793 29.6154C7.72715 29.6154 9.95583 27.4629 9.95583 24.8077C9.95583 22.1525 7.72715 20 4.97793 20C2.22871 20 3.05176e-05 22.1525 3.05176e-05 24.8077C3.05176e-05 27.4629 2.22871 29.6154 4.97793 29.6154Z"
        fill={color}
      />
      <path
        d="M25.0002 29.6154C27.7494 29.6154 29.9781 27.4629 29.9781 24.8077C29.9781 22.1525 27.7494 20 25.0002 20C22.251 20 20.0223 22.1525 20.0223 24.8077C20.0223 27.4629 22.251 29.6154 25.0002 29.6154Z"
        fill={color}
      />
      <path
        d="M45.0221 29.6154C47.7714 29.6154 50 27.4629 50 24.8077C50 22.1525 47.7714 20 45.0221 20C42.2729 20 40.0442 22.1525 40.0442 24.8077C40.0442 27.4629 42.2729 29.6154 45.0221 29.6154Z"
        fill={color}
      />
    </svg>
  )
);

export default More;
