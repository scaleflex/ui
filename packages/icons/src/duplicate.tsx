import React from 'react';
import type { IconProps } from './icon.props';

export const Duplicate = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.33984 12.111V2.04761C2.33984 1.49532 2.78756 1.04761 3.33984 1.04761H10.8182C11.3705 1.04761 11.8182 1.49532 11.8182 2.04761V12.111C11.8182 12.6633 11.3705 13.111 10.8182 13.111H3.33984C2.78756 13.111 2.33984 12.6633 2.33984 12.111ZM3.33984 12.111V2.04761L10.8182 2.04761L10.8182 12.111L3.33984 12.111Z"
      fill={color}
    />
    <path
      d="M13.66 4.97388C13.66 4.69774 13.4361 4.47388 13.16 4.47388C12.8838 4.47388 12.66 4.69774 12.66 4.97388V13.9523H5.40491C5.12876 13.9523 4.90491 14.1761 4.90491 14.4523C4.90491 14.7284 5.12876 14.9523 5.40491 14.9523H13.16C13.4361 14.9523 13.66 14.7284 13.66 14.4523V4.97388Z"
      fill={color}
    />
  </svg>
);

export default Duplicate;
