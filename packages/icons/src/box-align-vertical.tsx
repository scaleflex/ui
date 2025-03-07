import React from 'react';
import type { IconProps } from './icon.props';

export const BoxAlignVertical = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g id="ic-box-align-vertical-center">
      <path
        id="ic-sidebar-right"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 24.9885C50 23.8776 49.0994 22.977 47.9885 22.977L2.01149 22.977C0.900574 22.977 3.72343e-08 23.8776 2.39868e-08 24.9885C1.07392e-08 26.0994 0.900574 27 2.01149 27L47.9885 27C49.0994 27 50 26.0994 50 24.9885Z"
        fill={color}
      />
      <path
        id="ic-desc"
        d="M21.001 42.0001L21.001 8.00029C21.001 6.34313 19.6579 5 18.0003 5C16.3431 5 15 6.34272 15 8.00029L15 42.0001C15.0004 43.6569 16.3435 45 18.0007 45C19.6579 45 21.001 43.6569 21.001 42.0001Z"
        fill={color}
      />
      <path
        id="ic-desc_2"
        d="M35.2737 35.0001L35.2737 16.5003C35.2737 14.8431 33.9306 13.5 32.273 13.5C30.6158 13.5 29.2727 14.8427 29.2727 16.5003L29.2727 35.0001C29.2731 36.6569 30.6162 38 32.2734 38C33.9306 38 35.2737 36.6569 35.2737 35.0001Z"
        fill={color}
      />
    </g>
  </svg>
);

export default BoxAlignVertical;
