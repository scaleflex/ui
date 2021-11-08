import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ArrowDownLeft = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.4874 28.1903L0.85782 29.1421M0.85782 29.1421L1.80969 10.5126M0.85782 29.1421L29.1421 0.857865"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </svg>
  )
);

export default ArrowDownLeft;
