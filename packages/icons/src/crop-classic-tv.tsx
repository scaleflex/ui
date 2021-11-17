import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CropClassicTv = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M0.125 2.375C0.125 1.51206 0.824555 0.8125 1.6875 0.8125H42.3125C43.1754 0.8125 43.875 1.51206 43.875 2.375V33.625C43.875 34.4879 43.1754 35.1875 42.3125 35.1875H1.6875C0.824555 35.1875 0.125 34.4879 0.125 33.625V2.375ZM3.25 3.9375V32.0625H40.75V3.9375H3.25Z"
        fill={color}
      />
    </svg>
  )
);

export default CropClassicTv;
