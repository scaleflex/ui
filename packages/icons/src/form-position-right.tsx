import React from 'react';
import type { IconProps } from './icon.props';

export const FormPositionRight = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 68 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g clipPath="url(#clip0_25275_19238)">
      <rect x="34" y="-0.5" width="1" height="49" fill={color} />
      <rect x="39.5" y="18.5" width="23" height="3" rx="0.5" stroke={color} />
      <rect x="43.5" y="25.5" width="15" height="3" rx="0.5" fill={color} stroke={color} />
      <g clipPath="url(#clip1_25275_19238)">
        <path d="M0 4C0 1.79086 1.79086 0 4 0H35V48H4C1.79086 48 0 46.2091 0 44V4Z" fill="#F3F7FA" />
        <rect x="34" y="-0.5" width="1" height="49" fill={color} />
      </g>
      <path d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H34.5V47.5H4C2.067 47.5 0.5 45.933 0.5 44V4Z" stroke={color} />
    </g>
    <rect x="0.5" y="0.5" width="67" height="47" rx="3.5" stroke={color} />
    <defs>
      <clipPath id="clip0_25275_19238">
        <rect width="68" height="48" rx="4" fill="white" />
      </clipPath>
      <clipPath id="clip1_25275_19238">
        <path d="M0 4C0 1.79086 1.79086 0 4 0H35V48H4C1.79086 48 0 46.2091 0 44V4Z" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FormPositionRight;
