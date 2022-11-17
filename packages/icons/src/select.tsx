import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Select = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <path d="M5.52083 11.0417H0V16.5625H5.52083V11.0417Z" fill={color} />
      <path d="M5.52083 22.1875H0V27.7083H5.52083V22.1875Z" fill={color} />
      <path d="M5.52083 33.3333H0V38.8542H5.52083V33.3333Z" fill={color} />
      <path d="M5.52083 44.375H0V49.8958H5.52083V44.375Z" fill={color} />
      <path d="M27.8125 0H22.2917V5.52084H27.8125V0Z" fill={color} />
      <path d="M16.6667 44.375H11.1458V49.8958H16.6667V44.375Z" fill={color} />
      <path d="M16.6667 0H11.1458V5.52084H16.6667V0Z" fill={color} />
      <path d="M5.52083 0H0V5.52084H5.52083V0Z" fill={color} />
      <path d="M50 22.1875H44.4792V27.7083H50V22.1875Z" fill={color} />
      <path d="M27.8125 44.375H22.2917V49.8958H27.8125V44.375Z" fill={color} />
      <path d="M50 11.0417H44.4792V16.5625H50V11.0417Z" fill={color} />
      <path d="M50 33.3333H44.4792V38.8542H50V33.3333Z" fill={color} />
      <path d="M38.8542 44.375H33.3333V49.8958H38.8542V44.375Z" fill={color} />
      <path d="M50 44.375H44.4792V49.8958H50V44.375Z" fill={color} />
      <path d="M14.1458 35.8542H35.8542L35.9583 14.0417H14.1458V35.8542Z" fill={color} />
      <path d="M38.8542 0H33.3333V5.52084H38.8542V0Z" fill={color} />
      <path d="M50 0H44.4792V5.52084H50V0Z" fill={color} />
    </svg>
  )
);

export default Select;
