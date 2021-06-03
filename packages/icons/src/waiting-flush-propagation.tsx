import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const WaitingFlushPropagation = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g clipPath="url(#clip0)">
        <path
          d="M25 0.000549316C11.25 0.000549316 0 11.2505 0 25.0005C0 38.7505 11.25 50.0005 25 50.0005C38.75 50.0005 50 38.7505 50 25.0005C50 11.2505 38.75 0.000549316 25 0.000549316ZM32.75 23.5005L26.25 27.2505C25 28.0005 23.5 27.5005 22.75 26.2505C22.5 25.7505 22.5 25.5005 22.5 25.0005V12.5005C22.5 11.0005 23.5 10.0005 25 10.0005C26.5 10.0005 27.5 11.0005 27.5 12.5005V20.7505L30.25 19.2505C31.5 18.5005 33 19.0005 33.75 20.2505C34.5 21.5005 34 22.7505 32.75 23.5005Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="50" height="50" fill="white" transform="translate(0 0.000549316)" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default WaitingFlushPropagation;
