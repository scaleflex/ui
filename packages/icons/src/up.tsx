import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Up = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2326 1.23222C22.2089 0.255916 23.7918 0.255928 24.7681 1.23225L44.7678 21.2322C45.7441 22.2086 45.7441 23.7915 44.7678 24.7678C43.7914 25.7441 42.2085 25.7441 41.2322 24.7678L23.0003 6.53553L4.76775 24.7678C3.79143 25.7441 2.20852 25.7441 1.23222 24.7678C0.255916 23.7914 0.255928 22.2085 1.23225 21.2322L21.2326 1.23222Z"
        fill={color}
      />
    </svg>
  )
);

export default Up;
