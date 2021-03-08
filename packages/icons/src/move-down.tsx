import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const MoveDown = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g clipPath="url(#clip0)">
        <path d="M28.8315 -0.999969V29.2706H41.2074L24.6037 49L8 29.2706H20.376V-0.999969H28.8315Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="50" height="48.4848" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default MoveDown;
