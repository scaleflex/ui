import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const MinusOutline = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M35.835 5.07641L2.16498 5.07641C1.00277 5.07641 0.0606079 4.14677 0.0606079 3C0.060608 1.85323 1.00277 0.923584 2.16498 0.923584L35.835 0.923585C36.9972 0.923585 37.9394 1.85323 37.9394 3C37.9394 4.14677 36.9972 5.07641 35.835 5.07641Z"
        fill={color}
      />
    </svg>
  )
);

export default MinusOutline;
