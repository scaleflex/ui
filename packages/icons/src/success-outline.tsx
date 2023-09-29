import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const SuccessOutline = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="11" cy="11" r="10.5" fill="white" stroke={color} />
      <path
        d="M15.0889 7.58115L15.0945 7.57508L15.0998 7.56882C15.1225 7.54233 15.1451 7.52738 15.1665 7.51808C15.1891 7.50831 15.2173 7.50195 15.2514 7.50195C15.2824 7.50195 15.3049 7.50802 15.3268 7.51863C15.3517 7.53064 15.3855 7.55334 15.4291 7.59698C15.5326 7.70041 15.5095 7.87806 15.4448 7.93732L15.4287 7.95209L15.4139 7.96822L9.37717 14.5604L9.37162 14.5664L9.36628 14.5726C9.34358 14.5991 9.32106 14.6141 9.2996 14.6234C9.27705 14.6332 9.24884 14.6395 9.21468 14.6395C9.16319 14.6395 9.11928 14.6263 9.06252 14.57L6.57738 12.0366L6.57739 12.0366L6.57399 12.0332C6.48464 11.9438 6.4648 11.7569 6.57799 11.6231L6.578 11.6231L6.5804 11.6202C6.61174 11.5826 6.66712 11.5587 6.70338 11.5587C6.77208 11.5587 6.83462 11.584 6.8795 11.628L8.83269 13.6294L9.20203 14.0079L9.55923 13.6179L15.0889 7.58115Z"
        fill={color}
        stroke={color}
      />
    </svg>
  )
);

export default SuccessOutline;
