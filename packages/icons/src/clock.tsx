import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Clock = intrinsicComponent<IconProps, SVGSVGElement>((
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
      <path d="M34.1833 29.4151L27.2119 24.1866V13.536C27.2119 12.4651 26.3462 11.5995 25.2753 11.5995C24.2045 11.5995 23.3388 12.4651 23.3388 13.536V25.1549C23.3388 25.7649 23.6254 26.3401 24.1134 26.7041L31.8593 32.5136C32.2079 32.775 32.6146 32.9009 33.0193 32.9009C33.6099 32.9009 34.1909 32.6356 34.5705 32.1244C35.2135 31.2703 35.0392 30.0561 34.1833 29.4151Z" fill={color} />
      <path d="M25.2754 0C11.4895 0 0.275391 11.2142 0.275391 25C0.275391 38.7858 11.4895 50 25.2754 50C39.0612 50 50.2754 38.7858 50.2754 25C50.2754 11.2142 39.0612 0 25.2754 0ZM25.2754 46.1271C13.6274 46.1271 4.14834 36.6479 4.14834 25C4.14834 13.3521 13.6274 3.87295 25.2754 3.87295C36.9253 3.87295 46.4024 13.3521 46.4024 25C46.4024 36.6479 36.9233 46.1271 25.2754 46.1271Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="50" height="50" fill="white" transform="translate(0.275391)" />
      </clipPath>
    </defs>
  </svg>
));

export default Clock;
