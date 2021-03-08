import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Select = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <path d="M5.79546 11.0417H0.274628V16.5625H5.79546V11.0417Z" fill={color} />
      <path d="M5.79546 22.1875H0.274628V27.7083H5.79546V22.1875Z" fill={color} />
      <path d="M5.79546 33.3333H0.274628V38.8542H5.79546V33.3333Z" fill={color} />
      <path d="M5.79546 44.375H0.274628V49.8958H5.79546V44.375Z" fill={color} />
      <path d="M28.0871 0H22.5663V5.52084H28.0871V0Z" fill={color} />
      <path d="M16.9413 44.375H11.4205V49.8958H16.9413V44.375Z" fill={color} />
      <path d="M16.9413 0H11.4205V5.52084H16.9413V0Z" fill={color} />
      <path d="M5.79546 0H0.274628V5.52084H5.79546V0Z" fill={color} />
      <path d="M50.2746 22.1875H44.7538V27.7083H50.2746V22.1875Z" fill={color} />
      <path d="M28.0871 44.375H22.5663V49.8958H28.0871V44.375Z" fill={color} />
      <path d="M50.2746 11.0417H44.7538V16.5625H50.2746V11.0417Z" fill={color} />
      <path d="M50.2746 33.3333H44.7538V38.8542H50.2746V33.3333Z" fill={color} />
      <path d="M39.1288 44.375H33.608V49.8958H39.1288V44.375Z" fill={color} />
      <path d="M50.2746 44.375H44.7538V49.8958H50.2746V44.375Z" fill={color} />
      <path d="M11.4205 38.8542H39.233V11.0417H11.4205V38.8542Z" fill={color} />
      <path d="M39.1288 0H33.608V5.52084H39.1288V0Z" fill={color} />
      <path d="M50.2746 0H44.7538V5.52084H50.2746V0Z" fill={color} />
    </svg>
  )
);

export default Select;
