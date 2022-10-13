import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const NotificationOn = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 57 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M31.381 9.01176C30.6216 8.60798 29.8216 8.27483 28.9886 8.02092V4.16671C28.9886 1.87502 27.1857 0 24.9821 0C22.7786 0 20.9757 1.87502 20.9757 4.16671V7.91675C15.1663 9.68761 10.9595 15.3127 10.9595 21.8752V27.0836C10.9595 30.3128 10.1582 33.4379 8.55563 36.1462L5.15018 42.0838C4.94986 42.3963 4.94986 42.813 5.15018 43.1255C5.3505 43.438 5.65095 43.6463 6.0516 43.6463H44.113C44.5136 43.6463 44.8141 43.438 45.0144 43.1255C45.0144 42.9171 45.0144 42.5005 44.8141 42.188L41.4086 36.2504C39.8061 33.542 39.0047 30.3128 39.0047 27.1878V23.5093C34.4058 21.1972 31.2502 16.4359 31.2502 10.9375C31.2502 10.2842 31.2947 9.64136 31.381 9.01176Z"
        fill={color}
      />
      <path
        d="M24.9821 50C22.1776 50 19.7738 48.3333 18.672 45.8333H31.2921C30.1903 48.3333 27.7865 50 24.9821 50Z"
        fill={color}
      />
      <ellipse cx="45.3125" cy="10.9375" rx="10.9375" ry="10.9375" fill="#FF564E" />
    </svg>
  )
);

export default NotificationOn;
