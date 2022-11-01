import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const PlusOutline = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M16.9167 21.0838L16.9167 35.6672C16.9167 36.8177 17.8494 37.7505 19 37.7505C20.1506 37.7505 21.0833 36.8177 21.0833 35.6672L21.0833 21.0838H35.6667C36.8173 21.0838 37.75 20.1511 37.75 19.0005C37.75 17.8499 36.8173 16.9172 35.6667 16.9172L21.0833 16.9172L21.0833 2.33382C21.0833 1.18323 20.1506 0.250488 19 0.250488C17.8494 0.250488 16.9167 1.18323 16.9167 2.33382L16.9167 16.9172H2.33333C1.18274 16.9172 0.25 17.8499 0.25 19.0005C0.25 20.1511 1.18274 21.0838 2.33333 21.0838H16.9167Z"
        fill={color}
      />
    </svg>
  )
);

export default PlusOutline;
