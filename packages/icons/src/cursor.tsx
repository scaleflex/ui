import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Cursor = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_22758_46196)">
        <path
          d="M25.332 0C26.6199 0 27.664 1.04406 27.664 2.33198V47.668C27.664 48.9559 26.6199 50 25.332 50C24.0441 50 23 48.9559 23 47.668V2.33198C23 1.04406 24.0441 0 25.332 0Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_22758_46196">
          <rect width="50" height="50" fill="white" transform="translate(0 0.000488281)" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Cursor;
