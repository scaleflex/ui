import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Video2 = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M38.2 7.00012L42.6 15.8001H36L31.6 7.00012H27.2L31.6 15.8001H25L20.6 7.00012H16.2L20.6 15.8001H14L9.6 7.00012H7.4C4.98 7.00012 3 8.98012 3 11.4001V37.8001C3 40.2201 4.98 42.2001 7.4 42.2001H42.6C45.02 42.2001 47 40.2201 47 37.8001V7.00012H38.2Z"
        fill={color}
      />
    </svg>
  )
);

export default Video2;
