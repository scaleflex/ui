import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Dropbox = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M14.75 0L0 9.63L10.14 17.81L25.05 8.62L14.75 0Z" fill={color} />
      <path d="M50 9.65L35.29 0.0700002L25.05 8.62L39.88 17.79L50 9.65Z" fill={color} />
      <path d="M25.05 26.96L35.29 35.54L50 25.95L39.88 17.79L25.05 26.96Z" fill={color} />
      <path d="M0 25.99L14.75 35.54L25.05 26.96L10.14 17.81L0 25.99Z" fill={color} />
      <path
        d="M25.05 28.81L14.77 37.42L10.36 34.57V37.76L25.05 46.59L39.8 37.74V34.57L35.37 37.42L25.05 28.81Z"
        fill={color}
      />
    </svg>
  )
);

export default Dropbox;
