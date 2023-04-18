import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const PublicEye = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M0.557736 26.5575C5.35714 34.0912 13.5148 45.0003 25 45.0003C36.4852 45.0003 46.4286 32.273 49.4732 26.5575C50.1752 25.6321 50.1752 24.3281 49.4732 23.4451C46.4286 17.7276 36.4852 5.00047 25 5.00047C13.5148 4.95841 3.57143 17.7276 0.557736 23.4031C-0.185912 24.3285 -0.185912 25.6321 0.557736 26.5575ZM25 14.0913C30.4947 14.0913 35.7143 19.3648 35.7143 24.9595C35.7143 30.5541 30.4947 35.9094 25 35.9094C19.5053 35.9094 14.2857 30.5541 14.2857 24.9595C14.2857 19.3648 19.5053 14.0913 25 14.0913Z"
        fill={color}
      />
      <path
        d="M25.0145 30.1821C27.57 30.1821 30 27.6549 30 25.053C30 22.451 27.57 20.0003 25.0145 20.0003C22.459 20.0003 20 22.451 20 25.053C20 27.6549 22.459 30.1821 25.0145 30.1821Z"
        fill={color}
      />
    </svg>
  )
);

export default PublicEye;
