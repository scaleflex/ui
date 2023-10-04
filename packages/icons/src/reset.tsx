import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Reset = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M25 0C38.8071 0 50 11.1929 50 25C50 38.807 38.8071 50 25 50C14.111 50 4.854 43.0397 1.42326 33.333C0.963005 32.0312 1.6455 30.603 2.94725 30.143C4.249 29.6828 5.67725 30.365 6.1375 31.667C8.88425 39.4382 16.2957 45 25 45C36.0457 45 45 36.0457 45 25C45 13.9543 36.0457 5 25 5C21.121 5 17.8345 6.40292 14.7095 8.6015C12.6078 10.0803 10.663 11.8526 8.6895 13.75H16.25C17.6308 13.75 18.75 14.8693 18.75 16.25C18.75 17.6307 17.6308 18.75 16.25 18.75H2.5C1.11926 18.75 0 17.6307 0 16.25V2.5C0 1.1193 1.11926 0 2.5 0C3.88075 0 5 1.1193 5 2.5V10.3593C7.12075 8.31457 9.38601 6.23342 11.8325 4.51222C15.5128 1.9229 19.7882 0 25 0Z"
        fill={color}
      />
    </svg>
  )
);

export default Reset;
