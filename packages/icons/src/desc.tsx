import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Desc = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M0.839966 1.71662H13.1599C13.6239 1.71662 14 1.34055 14 0.876427C14 0.412423 13.624 0.0363464 13.1599 0.0363464H0.839966C0.376077 0.0364614 0 0.412538 0 0.876542C0 1.34055 0.376077 1.71662 0.839966 1.71662Z" 
        fill={color}
      />
      <path
        d="M0.839966 5.71298H8.81992C9.28392 5.71298 9.66 5.3369 9.66 4.87278C9.66 4.40878 9.28404 4.0327 8.81992 4.0327H0.839966C0.376077 4.03282 0 4.4089 0 4.8729C0 5.3369 0.376077 5.71298 0.839966 5.71298Z"
        fill={color}
      />
      <path
        d="M0.839966 9.91298H5.59992C6.06392 9.91298 6.44 9.5369 6.44 9.07279C6.44 8.60878 6.06404 8.2327 5.59992 8.2327H0.839966C0.376077 8.23282 0 8.6089 0 9.0729C0 9.5369 0.376077 9.91298 0.839966 9.91298Z"
        fill={color}
      />
  </svg>
  )
);

export default Desc;
