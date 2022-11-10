import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Download = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 16, ...rest }, ref): JSX.Element => (
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
        d="M36.8805 21.0001C36.6807 20.472 36.0813 20.0494 35.4818 20.0494H30.4468V1.58463C30.4468 0.739559 29.7475 0.00012207 28.9483 0.00012207H21.0361C20.2369 0.00012207 19.5376 0.739559 19.5376 1.58463V20.1551H14.5025C13.9031 20.1551 13.4036 20.472 13.1039 21.1058C12.9041 21.6339 13.004 22.3734 13.3037 22.7959L23.7934 35.4719C24.0931 35.7888 24.4927 36.0001 24.8923 36.0001C25.2919 36.0001 25.6915 35.7888 25.9912 35.4719L36.4809 22.7959C37.0803 22.2677 37.0803 21.6339 36.8805 21.0001Z"
        fill={color}
      />
      <path
        d="M43.7343 34.0001V43.6001H6.26566V34.0001H0V46.8001C0 48.6135 1.35756 50.0001 3.13283 50.0001H46.8672C48.6424 50.0001 50 48.6135 50 46.8001V34.0001H43.7343Z"
        fill={color}
      />
    </svg>
  )
);

export default Download;
