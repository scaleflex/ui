import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ArrowBottom = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8468 3.13984C11.0457 3.33138 11.0517 3.64791 10.8602 3.84682L6.04534 8.84682C5.95332 8.94238 5.82709 8.99746 5.69445 8.99991C5.5618 9.00237 5.43362 8.95201 5.33812 8.85992L0.152931 3.85992C-0.0458479 3.66824 -0.0516033 3.35171 0.140078 3.15293C0.331758 2.95415 0.648288 2.9484 0.847067 3.14008L5.67208 7.79277L10.1398 3.15318C10.3314 2.95427 10.6479 2.9483 10.8468 3.13984Z"
        fill={color}
      />
    </svg>
  )
);

export default ArrowBottom;
