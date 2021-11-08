import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Vignette = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M3.68762 0.5625C1.96173 0.5625 0.562622 1.96161 0.562622 3.6875V44.3125C0.562622 46.0384 1.96173 47.4375 3.68762 47.4375H44.3126C46.0385 47.4375 47.4376 46.0384 47.4376 44.3125V3.6875C47.4376 1.96161 46.0385 0.5625 44.3126 0.5625H3.68762ZM3.68762 3.6875H6.81262H41.1876H44.3126V6.8125V41.1875V44.3125H41.1876H6.81262H3.68762V41.1875V6.8125V3.6875ZM36.5 24C36.5 30.9036 30.9036 36.5 24 36.5C17.0965 36.5 11.5 30.9036 11.5 24C11.5 17.0964 17.0965 11.5 24 11.5C30.9036 11.5 36.5 17.0964 36.5 24ZM39.625 24C39.625 32.6294 32.6295 39.625 24 39.625C15.3706 39.625 8.37503 32.6294 8.37503 24C8.37503 15.3705 15.3706 8.375 24 8.375C32.6295 8.375 39.625 15.3705 39.625 24Z"
        fill={color}
      />
    </svg>
  )
);

export default Vignette;
