import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Actions = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M5.5963 0L0.299805 10.593H5.69535L3.0054 19.6716L3.61533 20L14.6905 6.70924H7.92394L12.8712 0H5.5963Z"
        fill={color}
      />
    </svg>
  )
);

export default Actions;
