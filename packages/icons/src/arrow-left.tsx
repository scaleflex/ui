import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ArrowLeft = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 46 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 15.0005C0.5 14.2931 0.799676 13.6188 1.32474 13.1448L15.1709 0.644798C16.1958 -0.280422 17.7766 -0.199648 18.7018 0.825209C19.627 1.85007 19.5463 3.43092 18.5214 4.35614L9.5 12.5005L43 12.5005C44.3807 12.5005 45.5 13.6198 45.5 15.0005C45.5 16.3812 44.3807 17.5005 43 17.5005L9.5 17.5005L18.5214 25.6448C19.5463 26.57 19.627 28.1509 18.7018 29.1757C17.7766 30.2006 16.1958 30.2814 15.1709 29.3561L1.32474 16.8561C0.799676 16.3821 0.5 15.7078 0.5 15.0005Z"
        fill={color}
      />
    </svg>
  )
);

export default ArrowLeft;
