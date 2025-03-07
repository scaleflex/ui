import React from 'react';
import type { IconProps } from './icon.props';

export const BoxAlignBottom = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g id="ic-box-align-top">
      <path
        id="ic-sidebar-right"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 47.9885C50 46.8776 49.0994 45.977 47.9885 45.977L2.01149 45.977C0.900574 45.977 3.72343e-08 46.8776 2.39868e-08 47.9885C1.07392e-08 49.0994 0.900574 50 2.01149 50L47.9885 50C49.0994 50 50 49.0994 50 47.9885Z"
        fill={color}
      />
      <path
        id="ic-desc"
        d="M21.001 37.0001L21.001 3.00029C21.001 1.34313 19.6579 -2.03601e-07 18.0003 -1.31147e-07C16.3431 -5.87101e-08 15 1.34272 15 3.00029L15 37.0001C15.0004 38.6569 16.3435 40 18.0007 40C19.6579 40 21.001 38.6569 21.001 37.0001Z"
        fill={color}
      />
      <path
        id="ic-desc_2"
        d="M35.2737 37.0001L35.2737 18.5003C35.2737 16.8431 33.9306 15.5 32.273 15.5C30.6158 15.5 29.2727 16.8427 29.2727 18.5003L29.2727 37.0001C29.2731 38.6569 30.6162 40 32.2734 40C33.9306 40 35.2737 38.6569 35.2737 37.0001Z"
        fill={color}
      />
    </g>
  </svg>
);

export default BoxAlignBottom;
