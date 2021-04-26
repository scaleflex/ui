import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Info = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M25 0C11.2033 0 0 11.2033 0 25C0 38.7967 11.2033 50 25 50C38.7967 50 50 38.7967 50 25C50 11.2033 38.7967 0 25 0ZM22.4066 39.7303V17.8423C22.4066 17.5311 22.6141 17.3237 22.9253 17.3237H26.971C27.2822 17.3237 27.4896 17.5311 27.4896 17.8423V39.7303C27.4896 40.0415 27.2822 40.249 26.971 40.249H22.9253C22.6141 40.249 22.4066 40.0415 22.4066 39.7303ZM27.1784 14.4191C26.6597 14.9378 25.9336 15.249 25 15.249C24.0664 15.249 23.3402 15.0415 22.8216 14.4191C22.3029 13.9004 22.0954 13.278 22.0954 12.4481C22.0954 11.6183 22.3029 10.9959 22.8216 10.4772C23.3402 9.95851 24.0664 9.6473 25 9.6473C25.9336 9.6473 26.6597 9.85477 27.1784 10.4772C27.6971 10.9959 27.9046 11.6183 27.9046 12.4481C27.9046 13.1743 27.6971 13.9004 27.1784 14.4191Z"
        fill={color}
      />
    </svg>
  )
);

export default Info;
