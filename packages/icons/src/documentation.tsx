import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Documentation = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M8.68005 2.5H10.8265L8.68005 0.353516V2.5Z" fill={color} />
      <path
        d="M0.680054 0V14H11.1801V3H8.18005V0H0.680054ZM6.70007 9.52H1.68005V9.02H6.70007V9.52ZM9.22007 8.4H1.68005V7.9H9.22007V8.4ZM10.1801 7.28H1.68005V6.78H10.1801V7.28ZM10.1801 6.16H1.68005V5.66H10.1801V6.16ZM10.1801 4.5V5H1.68005V4.5H10.1801Z"
        fill={color}
      />
    </svg>
  )
);

export default Documentation;
