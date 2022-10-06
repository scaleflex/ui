import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const TwoArrowsRight = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M5.74299 0.152553C5.95998 -0.056404 6.30528 -0.0498885 6.51424 0.167105C6.7232 0.384099 6.71668 0.7294 6.49969 0.938357L1.43832 5.81227L6.51398 11.0759C6.72309 11.2928 6.71681 11.6381 6.49996 11.8472C6.28311 12.0563 5.9378 12.05 5.7287 11.8332L0.274151 6.1766C0.17369 6.07242 0.118752 5.93258 0.121433 5.78788C0.124113 5.64317 0.184193 5.50547 0.288444 5.40508L5.74299 0.152553Z"
        fill={color}
      />
      <path
        d="M10.9549 0.152554C11.1719 -0.0564031 11.5172 -0.0498876 11.7262 0.167106C11.9351 0.3841 11.9286 0.729401 11.7116 0.938357L6.65023 5.81227L11.7259 11.0759C11.935 11.2928 11.9287 11.6381 11.7119 11.8472C11.495 12.0563 11.1497 12.05 10.9406 11.8332L5.48606 6.1766C5.3856 6.07242 5.33067 5.93258 5.33335 5.78788C5.33603 5.64317 5.39611 5.50547 5.50036 5.40508L10.9549 0.152554Z"
        fill={color}
      />
    </svg>
  )
);

export default TwoArrowsRight;
