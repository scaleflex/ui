import React from 'react';
import type { IconProps } from './icon.props';

export const ArrowUp = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M15 0.500488C15.7074 0.500488 16.3816 0.800164 16.8557 1.32523L29.3557 15.1714C30.2809 16.1962 30.2001 17.7771 29.1752 18.7023C28.1504 19.6275 26.5695 19.5468 25.6443 18.5219L17.5 9.50049L17.5 43.0005C17.5 44.3812 16.3807 45.5005 15 45.5005C13.6193 45.5005 12.5 44.3812 12.5 43.0005L12.5 9.50049L4.35566 18.5219C3.43044 19.5468 1.84959 19.6275 0.824732 18.7023C-0.200126 17.7771 -0.2809 16.1962 0.64432 15.1714L13.1443 1.32523C13.6183 0.800164 14.2926 0.500488 15 0.500488Z"
      fill={color}
    />
  </svg>
);

export default ArrowUp;
