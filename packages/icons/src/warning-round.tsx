import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const WarningRound = intrinsicComponent<IconProps, SVGSVGElement>(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 50.0006C38.8071 50.0006 50 38.8077 50 25.0006C50 11.1935 38.8071 0.000610352 25 0.000610352C11.1929 0.000610352 0 11.1935 0 25.0006C0 38.8077 11.1929 50.0006 25 50.0006ZM24.9981 12.0006C23.3785 12.0006 22.0655 13.2811 22.0655 14.8608V26.3018C22.0655 27.8813 23.3785 29.1621 24.9981 29.1621C26.6178 29.1621 27.9308 27.8814 27.9308 26.3018V14.8608C27.9308 13.2812 26.6179 12.0006 24.9981 12.0006ZM25 38.3236C26.6569 38.3236 28 36.9804 28 35.3236C28 33.6667 26.6569 32.3236 25 32.3236C23.3431 32.3236 22 33.6667 22 35.3236C22 36.9804 23.3431 38.3236 25 38.3236Z"
        fill={color}
      />
    </svg>
  )
);

export default WarningRound;
