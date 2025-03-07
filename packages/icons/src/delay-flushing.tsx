import React from 'react';
import type { IconProps } from './icon.props';

export const DelayFlushing = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M5.6425 9.17808L25 28.5356L28.535 25.0006L9.1775 5.64308C13.6387 1.98606 19.2314 -0.00836311 25 0.000579257C38.8075 0.000579257 50 11.1931 50 25.0006C50 38.8081 38.8075 50.0006 25 50.0006C11.1925 50.0006 0 38.8081 0 25.0006C0 18.9981 2.115 13.4881 5.6425 9.17808Z"
      fill={color}
    />
  </svg>
);

export default DelayFlushing;
