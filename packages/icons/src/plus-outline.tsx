import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const PlusOutline = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M16.9167 21.0833L16.9167 35.6667C16.9167 36.8173 17.8494 37.75 19 37.75C20.1506 37.75 21.0833 36.8173 21.0833 35.6667L21.0833 21.0833H35.6667C36.8173 21.0833 37.75 20.1506 37.75 19C37.75 17.8494 36.8173 16.9167 35.6667 16.9167L21.0833 16.9167L21.0833 2.33333C21.0833 1.18274 20.1506 0.25 19 0.25C17.8494 0.25 16.9167 1.18274 16.9167 2.33333L16.9167 16.9167H2.33333C1.18274 16.9167 0.25 17.8494 0.25 19C0.25 20.1506 1.18274 21.0833 2.33333 21.0833H16.9167Z"
        fill={color}
      />
    </svg>
  )
);

export default PlusOutline;
