import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CropFrame = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <path d="M43 3H31.75V0.5H43C44.3807 0.5 45.5 1.61929 45.5 3V14.25H43V3Z" fill={color} />
      <path d="M3 14.25V3H14.25V0.5H3C1.61929 0.5 0.5 1.61929 0.5 3V14.25H3Z" fill={color} />
      <path d="M0.5 31.75V43C0.5 44.3807 1.61929 45.5 3 45.5H14.25V43H3V31.75H0.5Z" fill={color} />
      <path d="M43 31.75H45.5V43C45.5 44.3807 44.3807 45.5 43 45.5H31.75V43H43V31.75Z" fill={color} />
    </svg>
  )
);

export default CropFrame;
