import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Video2 = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.73293 31.664H32.166C33.6754 31.664 34.8992 30.4405 34.8989 28.9311V3.06836C34.8989 1.55896 33.6754 0.335449 32.166 0.335449H2.73293C1.22352 0.335449 1.52588e-05 1.55896 1.52588e-05 3.06836V28.9311C1.52588e-05 30.4405 1.22352 31.664 2.73293 31.664ZM8.75978 12.8355C10.8308 12.8355 12.5098 11.1565 12.5098 9.08545C12.5098 7.01439 10.8308 5.33545 8.75978 5.33545C6.68871 5.33545 5.00978 7.01439 5.00978 9.08545C5.00978 11.1565 6.68871 12.8355 8.75978 12.8355Z"
        fill={color}
      />
      <path
        d="M34.8991 12.621L45.3974 5.40649C47.3473 4.06668 50 5.46256 50 7.82798V24.1727C50 26.5384 47.347 27.9343 45.3974 26.5945L34.8991 19.38V12.621Z"
        fill={color}
      />
    </svg>
  )
);

export default Video2;
