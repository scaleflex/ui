import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Copy = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M44.8163 17.0833V49.375C44.8163 49.6875 44.5038 50 43.983 50H15.3372C14.9205 50 14.5038 49.6875 14.5038 49.375V45.5208H39.1913C39.608 45.5208 40.0247 45.1042 40.0247 44.6875V16.4583H43.983C44.5038 16.4583 44.8163 16.7708 44.8163 17.0833Z"
        fill={color}
      />
      <path d="M28.983 0.104157V9.47916H38.4622L28.983 0.104157Z" fill={color} />
      <path
        d="M27.4205 10.9375V0H7.10799C6.69133 0 6.27466 0.416654 6.27466 0.833321V43.125C6.27466 43.5417 6.69133 43.9583 7.10799 43.9583H37.5247C37.9413 43.9583 38.358 43.5417 38.358 43.125V10.8333H27.4205V10.9375Z"
        fill={color}
      />
    </svg>
  )
);

export default Copy;
