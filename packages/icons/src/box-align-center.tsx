import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const BoxAlignCenter = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g id="ic-box-align-center">
        <path
          id="ic-sidebar-right"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.9885 0.000488281C23.8776 0.000488281 22.977 0.901065 22.977 2.01198V47.989C22.977 49.0999 23.8776 50.0005 24.9885 50.0005C26.0994 50.0005 27 49.0999 27 47.989V2.01198C27 0.901065 26.0994 0.000488281 24.9885 0.000488281Z"
          fill={color}
        />
        <path
          id="ic-desc"
          d="M7.99988 21.001H41.9997C43.6569 21.001 45 19.6579 45 18.0003C45 16.3431 43.6573 15 41.9997 15H7.99988C6.34313 15.0004 5 16.3435 5 18.0007C5 19.6579 6.34313 21.001 7.99988 21.001Z"
          fill={color}
        />
        <path
          id="ic-desc_2"
          d="M15.9999 35.2737H34.4997C36.1569 35.2737 37.5 33.9306 37.5 32.273C37.5 30.6158 36.1573 29.2727 34.4997 29.2727H15.9999C14.3431 29.2731 13 30.6162 13 32.2734C13 33.9306 14.3431 35.2737 15.9999 35.2737Z"
          fill={color}
        />
      </g>
    </svg>
  )
);

export default BoxAlignCenter;
