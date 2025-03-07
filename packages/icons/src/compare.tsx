import React from 'react';
import type { IconProps } from './icon.props';

export const Compare = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.1607 4.16667V2.08333C27.1607 0.93274 26.2279 0 25.0773 0C23.9267 0 22.994 0.932741 22.994 2.08333V4.16667H4.244C1.94281 4.16667 0.0773315 6.03215 0.0773315 8.33333V41.6667C0.0773315 43.9679 1.94281 45.8333 4.244 45.8333H22.994V47.9167C22.994 49.0673 23.9267 50 25.0773 50C26.2279 50 27.1607 49.0673 27.1607 47.9167V45.8333H45.9107C48.2118 45.8333 50.0773 43.9678 50.0773 41.6667V8.33333C50.0773 6.03215 48.2119 4.16667 45.9107 4.16667H27.1607ZM22.994 8.33333H4.244L4.244 41.6667H22.994V8.33333ZM27.1607 41.6667V8.33333H45.9107V41.6667H27.1607Z"
      fill={color}
    />
  </svg>
);

export default Compare;
