import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const AlignBottom = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g id="ic-align-bottom">
        <path
          id="ic-text-align-center"
          d="M3 44C3 43.3096 3.54721 42.75 4.22222 42.75H45.7778C46.4528 42.75 47 43.3096 47 44C47 44.6904 46.4528 45.25 45.7778 45.25H4.22222C3.54721 45.25 3 44.6904 3 44Z"
          fill={color}
        />
        <path
          id="ic-arrow-right-alt"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.001 12C25.666 12 26.2051 12.5136 26.2051 13.1471L26.2042 34.2774L31.9904 29.3166C32.4847 28.8928 33.2461 28.931 33.6909 29.4019C34.1358 29.8728 34.0957 30.5981 33.6014 31.0219L25.8055 37.7056C25.3476 38.0981 24.6524 38.0981 24.1945 37.7056L16.3986 31.0219C15.9043 30.5981 15.8642 29.8728 16.3091 29.4019C16.7539 28.931 17.5153 28.8928 18.0096 29.3166L23.796 34.2775L23.7969 13.1471C23.7969 12.5136 24.336 12 25.001 12Z"
          fill={color}
        />
      </g>
    </svg>
  )
);

export default AlignBottom;
