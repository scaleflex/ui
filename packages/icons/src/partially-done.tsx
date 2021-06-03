import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const PartiallyDone = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', color2 = '#F8FAFB', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M0 25.0005C0 11.1934 11.1929 0.000549316 25 0.000549316V50.0005C11.1929 50.0005 0 38.8077 0 25.0005Z"
          fill={color}
        />
        <path
          d="M50 25.0005C50 38.8077 38.8071 50.0005 25 50.0005L25 0.000547131C38.8071 0.000548338 50 11.1934 50 25.0005Z"
          fill={color2}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="50" height="50" fill="white" transform="translate(0 0.000549316)" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default PartiallyDone;
