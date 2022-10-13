import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Documentation = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 38 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M28.5714 8.92857H36.2374L28.5714 1.26256V8.92857Z"
        fill={color}
      />
      <path
        d="M-6.10352e-05 0V50H37.4999V10.7143H26.7857V0H-6.10352e-05ZM21.5 34H3.57137V32.2143H21.5V34ZM30.5 30H3.57137V28.2143H30.5V30ZM33.9285 26H3.57137V24.2143H33.9285V26ZM33.9285 22H3.57137V20.2143H33.9285V22ZM33.9285 16.0714V17.8571H3.57137V16.0714H33.9285Z"
        fill={color}
      />
    </svg>
  )
);

export default Documentation;
