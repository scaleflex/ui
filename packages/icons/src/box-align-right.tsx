import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const BoxAlignRight = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g id="ic-box-align-right">
        <path
          id="ic-sidebar-right"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.9885 0.000488281C46.8776 0.000488281 45.977 0.901065 45.977 2.01198V47.989C45.977 49.0999 46.8776 50.0005 47.9885 50.0005C49.0994 50.0005 50 49.0999 50 47.989V2.01198C50 0.901065 49.0994 0.000488281 47.9885 0.000488281Z"
          fill={color}
        />
        <path
          id="ic-desc"
          d="M2.99988 21.001H36.9997C38.6569 21.001 40 19.6579 40 18.0003C40 16.3431 38.6573 15 36.9997 15H2.99988C1.34313 15.0004 0 16.3435 0 18.0007C0 19.6579 1.34313 21.001 2.99988 21.001Z"
          fill={color}
        />
        <path
          id="ic-desc_2"
          d="M17.9999 35.2737H36.4997C38.1569 35.2737 39.5 33.9306 39.5 32.273C39.5 30.6158 38.1573 29.2727 36.4997 29.2727H17.9999C16.3431 29.2731 15 30.6162 15 32.2734C15 33.9306 16.3431 35.2737 17.9999 35.2737Z"
          fill={color}
        />
      </g>
    </svg>
  )
);

export default BoxAlignRight;
