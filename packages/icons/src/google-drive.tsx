import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const GoogleDrive = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
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
      <path d="M24.6953 18.28L8.92531 45.56L0.945312 31.75L16.7253 4.45996L24.6953 18.28Z" fill={color} />
      <path d="M49.8655 30.92L33.9055 30.94L18.1655 3.63H34.1455L49.8655 30.92Z" fill={color} />
      <path d="M49.9052 32.59L41.9352 46.4L10.3652 46.38L18.3452 32.58L49.9052 32.59Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="50" height="50" fill="white" transform="translate(0.275391)" />
      </clipPath>
    </defs>
  </svg>
));

export default GoogleDrive;
