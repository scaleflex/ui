import React from 'react';
import type { IconProps } from './icon.props';

export const ArrowDown = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 30 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 45.5005C14.2926 45.5005 13.6183 45.2008 13.1443 44.6757L0.644305 30.8296C-0.280914 29.8047 -0.20014 28.2239 0.824719 27.2987C1.84958 26.3734 3.43043 26.4542 4.35565 27.4791L12.5 36.5005L12.5 3.00049C12.5 1.61978 13.6193 0.500486 15 0.500486C16.3807 0.500486 17.5 1.61977 17.5 3.00049L17.5 36.5005L25.6443 27.4791C26.5695 26.4542 28.1504 26.3734 29.1752 27.2987C30.2001 28.2239 30.2809 29.8047 29.3556 30.8296L16.8556 44.6757C16.3816 45.2008 15.7074 45.5005 15 45.5005Z"
      fill={color}
    />
  </svg>
);

export default ArrowDown;
