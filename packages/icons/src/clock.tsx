import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Clock = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M33.9079 29.4151L26.9365 24.1866V13.536C26.9365 12.4651 26.0709 11.5995 25 11.5995C23.9291 11.5995 23.0634 12.4651 23.0634 13.536V25.1549C23.0634 25.7649 23.3501 26.3401 23.838 26.7041L31.5839 32.5136C31.9325 32.775 32.3392 32.9009 32.7439 32.9009C33.3345 32.9009 33.9155 32.6356 34.2951 32.1244C34.9381 31.2703 34.7638 30.0561 33.9079 29.4151Z"
        fill={color}
      />
      <path
        d="M25 0C11.2142 0 0 11.2142 0 25C0 38.7858 11.2142 50 25 50C38.7858 50 50 38.7858 50 25C50 11.2142 38.7858 0 25 0ZM25 46.1271C13.3521 46.1271 3.87295 36.6479 3.87295 25C3.87295 13.3521 13.3521 3.87295 25 3.87295C36.6499 3.87295 46.1271 13.3521 46.1271 25C46.1271 36.6479 36.6479 46.1271 25 46.1271Z"
        fill={color}
      />
    </svg>
  )
);

export default Clock;
