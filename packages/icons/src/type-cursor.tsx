import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const TypeCursor = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 25 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M14.0625 20.3125H10.9375V23.4375H14.0625V20.3125Z" fill={color} />
      <path d="M14.0625 26.5625H10.9375V29.6875H14.0625V26.5625Z" fill={color} />
      <path
        d="M16.7141 0L12.5 2.80938L8.28594 0H0V3.125H7.33906L10.9375 5.52344V17.1875H14.0625V5.52344L17.6609 3.125H25V0H16.7141Z"
        fill={color}
      />
      <path
        d="M14.0625 44.4766V32.8125H10.9375V44.4766L7.33906 46.875H0V50H8.28594L12.5 47.1906L16.7141 50H25V46.875H17.6609L14.0625 44.4766Z"
        fill={color}
      />
    </svg>
  )
);

export default TypeCursor;
