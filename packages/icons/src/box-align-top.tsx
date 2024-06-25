import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const BoxAlignTop = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g id="ic-box-align-bottom">
        <path
          id="ic-sidebar-right"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 2.98851C50 1.87759 49.0994 0.977013 47.9885 0.977013L2.01149 0.977012C0.900574 0.977012 3.72343e-08 1.87759 2.39868e-08 2.98851C1.07392e-08 4.09943 0.900574 5 2.01149 5L47.9885 5C49.0994 5 50 4.09943 50 2.98851Z"
          fill={color}
        />
        <path
          id="ic-desc"
          d="M21.001 48.0001L21.001 14.0003C21.001 12.3431 19.6579 11 18.0003 11C16.3431 11 15 12.3427 15 14.0003L15 48.0001C15.0004 49.6569 16.3435 51 18.0007 51C19.6579 51 21.001 49.6569 21.001 48.0001Z"
          fill={color}
        />
        <path
          id="ic-desc_2"
          d="M35.2737 33.0001L35.2737 14.5003C35.2737 12.8431 33.9306 11.5 32.273 11.5C30.6158 11.5 29.2727 12.8427 29.2727 14.5003L29.2727 33.0001C29.2731 34.6569 30.6162 36 32.2734 36C33.9306 36 35.2737 34.6569 35.2737 33.0001Z"
          fill={color}
        />
      </g>
    </svg>
  )
);

export default BoxAlignTop;
