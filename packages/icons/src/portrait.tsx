import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Portrait = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M32.0625 46.875L32.0625 3.125L3.9375 3.125L3.9375 46.875H32.0625ZM35.1875 3.125C35.1875 1.39911 33.7884 0 32.0625 0H3.9375C2.21161 0 0.8125 1.39911 0.8125 3.125V46.875C0.8125 48.6009 2.21161 50 3.9375 50H32.0625C33.7884 50 35.1875 48.6009 35.1875 46.875L35.1875 3.125Z"
        fill={color}
      />
    </svg>
  )
);

export default Portrait;
