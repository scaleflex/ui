import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Landscape = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 51 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.11841 3.93805V32.063H47.8684V3.93805H4.11841ZM3.49341 0.813049C2.1127 0.813049 0.993408 1.91235 0.993408 3.26841V32.7327C0.993408 34.0887 2.1127 35.188 3.49341 35.188H48.4934C49.8741 35.188 50.9934 34.0887 50.9934 32.7327V3.26841C50.9934 1.91235 49.8741 0.813049 48.4934 0.813049H3.49341Z"
        fill={color}
      />
    </svg>
  )
);

export default Landscape;
