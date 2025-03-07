import React from 'react';
import type { IconProps } from './icon.props';

export const NavigationGroupNext = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size * (51 / 46)}
    height={size}
    viewBox="0 0 51 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M31.449 5.14053L31.449 16.52L16.0263 16.52L16.0263 29.5094L31.449 29.5094L31.449 40.8888C31.449 42.078 30.4793 43.0293 29.3085 43.0293L2.1405 43.0293C0.951332 43.0293 -3.89947e-06 42.0597 -4.00183e-06 40.8888L-7.12704e-06 5.14053C-7.231e-06 3.95136 0.96962 3.00003 2.1405 3.00003L29.3084 3.00002C30.4793 3.00002 31.449 3.95136 31.449 5.14053Z"
      fill={color}
    />
    <path
      d="M37.0289 34.8698L37.0289 29.0337C37.0289 28.4848 36.5898 28.0275 36.0593 28.0275L17.3985 28.0275L17.3985 17.9653L36.0593 17.9653C36.5898 17.9653 37.0289 17.5079 37.0289 16.959L37.0289 11.123L50 23.0147L37.0289 34.8698Z"
      fill={color}
    />
  </svg>
);

export default NavigationGroupNext;
