import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Airbox = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M0 4C0 1.79086 1.79086 0 4 0H46C48.2091 0 50 1.79086 50 4V46C50 48.2091 48.2091 50 46 50H4C1.79086 50 0 48.2091 0 46V4ZM14.5829 26.7292C13.9579 26.7292 13.3329 26.3125 13.1246 25.7917C12.9163 25.1667 12.9163 24.5417 13.5413 24.0208L24.4788 11.5208C24.7913 11.2083 25.2079 11 25.6246 11C26.0413 11 26.4579 11.2083 26.7704 11.5208L37.7079 24.0208C38.0204 24.4375 38.1246 25.1667 37.9163 25.6875C37.6038 26.3125 37.0829 26.625 36.4579 26.625H31.2079V37.9375C31.2079 38.7708 30.4788 39.5 29.6454 39.5H21.3954C20.5621 39.5 19.8329 38.7708 19.8329 37.9375L19.8329 26.7292H14.5829Z"
        fill={color}
      />
    </svg>
  )
);

export default Airbox;
