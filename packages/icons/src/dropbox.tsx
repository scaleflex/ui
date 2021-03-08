import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Dropbox = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g clipPath="url(#clip0)">
        <path d="M15.0952 2.81006L0.345215 12.4401L10.4852 20.6201L25.3952 11.4301L15.0952 2.81006Z" fill={color} />
        <path d="M50.3455 12.46L35.6355 2.88L25.3955 11.43L40.2255 20.6L50.3455 12.46Z" fill={color} />
        <path d="M25.3955 29.77L35.6355 38.35L50.3455 28.76L40.2255 20.6L25.3955 29.77Z" fill={color} />
        <path d="M0.345215 28.8L15.0952 38.35L25.3952 29.77L10.4852 20.62L0.345215 28.8Z" fill={color} />
        <path
          d="M25.3956 31.62L15.1156 40.23L10.7056 37.38V40.57L25.3956 49.4L40.1456 40.55V37.38L35.7156 40.23L25.3956 31.62Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="50" height="50" fill="white" transform="translate(0.275391)" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Dropbox;
