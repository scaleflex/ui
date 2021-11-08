import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ArrowUpLeft = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ stroke = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
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
        d="M1.80975 19.4874L0.857875 0.857836M0.857875 0.857836L19.4874 1.80971M0.857875 0.857836L29.1421 29.1421"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);

export default ArrowUpLeft;
