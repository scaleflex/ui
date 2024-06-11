import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const AlignTop = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g id="ic-align-top">
        <path
          id="ic-text-align-center"
          d="M3 12C3 11.3096 3.54721 10.75 4.22222 10.75H45.7778C46.4528 10.75 47 11.3096 47 12C47 12.6904 46.4528 13.25 45.7778 13.25H4.22222C3.54721 13.25 3 12.6904 3 12Z"
          fill={color}
        />
        <path
          id="ic-arrow-right-alt"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.999 44C24.334 44 23.7949 43.4864 23.7949 42.8529L23.7958 21.7226L18.0096 26.6834C17.5153 27.1072 16.7539 27.069 16.3091 26.5981C15.8642 26.1272 15.9043 25.4019 16.3986 24.9781L24.1945 18.2944C24.6524 17.9019 25.3476 17.9019 25.8055 18.2944L33.6014 24.9781C34.0957 25.4019 34.1358 26.1272 33.6909 26.5981C33.2461 27.069 32.4847 27.1072 31.9904 26.6834L26.204 21.7225L26.2031 42.8529C26.2031 43.4864 25.664 44 24.999 44Z"
          fill={color}
        />
      </g>
    </svg>
  )
);

export default AlignTop;
