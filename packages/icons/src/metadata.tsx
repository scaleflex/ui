import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Metadata = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 28, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect x="0.400024" y="2.14545" width="8.72727" height="2.61818" rx="1" fill={color} />
      <rect x="0.400024" y="10.8727" width="8.72727" height="2.61818" rx="1" fill={color} />
      <rect x="0.400024" y="15.2363" width="8.72727" height="2.61818" rx="1" fill={color} />
      <rect x="0.400024" y="6.50909" width="8.72727" height="2.61818" rx="1" fill={color} />
      <rect x="10.8728" y="2.14545" width="8.72727" height="2.61818" rx="1" fill={color} />
      <rect x="10.8728" y="10.8727" width="8.72727" height="2.61818" rx="1" fill={color} />
      <rect x="10.8728" y="15.2363" width="8.72727" height="2.61818" rx="1" fill={color} />
      <rect x="10.8728" y="6.50909" width="8.72727" height="2.61818" rx="1" fill={color} />
    </svg>
  )
);
