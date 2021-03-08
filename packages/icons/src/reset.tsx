import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Reset = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M13.576 4.58422V0L2.27539 6.82303L13.576 13.6461V8.95522C14.1091 8.95522 26.2626 8.95522 26.689 9.06183C36.1773 9.8081 43.64 17.6972 43.64 27.3987C43.64 37.5267 35.431 45.7356 25.3031 45.7356C15.1752 45.7356 6.96622 37.42 6.96622 27.2921V26.7591H2.70183V27.2921C2.70183 39.7655 12.8298 50 25.4097 50C37.9897 50 48.1176 39.8721 48.1176 27.2921C48.1176 15.3518 38.8426 5.54371 27.0089 4.69083C26.3692 4.58422 14.1091 4.58422 13.576 4.58422Z"
        fill={color}
      />
      <path
        d="M33.9385 20.469L31.5931 18.1236L25.3031 24.4136L19.0131 18.1236L16.6677 20.469L22.9577 26.759L16.6677 33.1556L19.0131 35.501L25.3031 29.211L31.5931 35.501L33.9385 33.1556L27.6485 26.759L33.9385 20.469Z"
        fill={color}
      />
    </svg>
  )
);

export default Reset;
