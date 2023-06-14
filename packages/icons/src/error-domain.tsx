import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ErrorDomain = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M22.5 13.7505V6.25055C22.5 5.58751 22.7634 4.95162 23.2322 4.48278C23.7011 4.01394 24.337 3.75055 25 3.75055H47.5C48.163 3.75055 48.7989 4.01394 49.2678 4.48278C49.7366 4.95162 50 5.58751 50 6.25055V46.2505C50 46.9136 49.7366 47.5495 49.2678 48.0183C48.7989 48.4872 48.163 48.7505 47.5 48.7505H2.5C1.83696 48.7505 1.20107 48.4872 0.732233 48.0183C0.263392 47.5495 0 46.9136 0 46.2505V16.2505C0 15.5875 0.263392 14.9516 0.732233 14.4828C1.20107 14.0139 1.83696 13.7505 2.5 13.7505H22.5ZM7.5 36.2505V41.2505H20V36.2505H7.5ZM30 36.2505V41.2505H42.5V36.2505H30ZM30 28.7505V33.7505H42.5V28.7505H30ZM30 21.2505V26.2505H42.5V21.2505H30ZM7.5 28.7505V33.7505H20V28.7505H7.5Z"
        fill={color}
      />
    </svg>
  )
);

export default ErrorDomain;
