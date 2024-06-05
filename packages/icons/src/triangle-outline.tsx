import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const TriangleOutline = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g id="ic-triangle">
        <path
          id="Vector"
          d="M46.9419 46.4543H3.51806C3.25422 46.4543 2.99495 46.3855 2.76579 46.2547C2.53664 46.124 2.34552 45.9358 2.21126 45.7086C2.07701 45.4815 2.00426 45.2233 2.00018 44.9595C1.9961 44.6957 2.06084 44.4354 2.18801 44.2042L23.9 4.72795C24.0428 4.50476 24.2395 4.3211 24.4719 4.19389C24.7043 4.06668 24.965 4 25.23 4C25.495 4 25.7557 4.06668 25.9881 4.19389C26.2205 4.3211 26.4172 4.50476 26.56 4.72795L48.272 44.2042C48.3992 44.4354 48.4639 44.6957 48.4598 44.9595C48.4557 45.2233 48.383 45.4815 48.2487 45.7086C48.1145 45.9358 47.9234 46.124 47.6942 46.2547C47.4651 46.3855 47.2058 46.4543 46.9419 46.4543ZM6.08857 43.4177H44.3745L25.23 8.61484L6.08857 43.4177Z"
          fill={color}
        />
      </g>
    </svg>
  )
);

export default TriangleOutline;
