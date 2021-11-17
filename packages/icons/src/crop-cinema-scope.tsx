import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CropCinemaScope = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M0 1.625C0 0.762055 0.699555 0.0625 1.5625 0.0625H48.4375C49.3004 0.0625 50 0.762055 50 1.625V20.375C50 21.2379 49.3004 21.9375 48.4375 21.9375H1.5625C0.699555 21.9375 0 21.2379 0 20.375V1.625ZM3.125 3.1875V18.8125H46.875V3.1875H3.125Z"
        fill={color}
      />
    </svg>
  )
);

export default CropCinemaScope;
