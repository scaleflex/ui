import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Indeterminate = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M50 4.00085C50 1.92979 48.3211 0.250854 46.25 0.250854H3.75C1.67893 0.250854 0 1.92979 0 4.00085C0 6.07192 1.67893 7.75085 3.75 7.75085H46.25C48.3211 7.75085 50 6.07192 50 4.00085Z"
        fill={color}
      />
    </svg>
  )
);

export default Indeterminate;
