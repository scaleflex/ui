import React from 'react';
import type { IconProps } from './icon.props';

export const CoverLayoutStandard = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 68 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <rect width="68" height="48" fill="#F3F7FA" />
    <rect x="0.5" y="0.5" width="67" height="47" rx="3.5" stroke={color} />
    <path d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H44.84V47.5H4C2.06701 47.5 0.5 45.933 0.5 44V4Z" fill="#F3F7FA" />
    <path d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H44.84V47.5H4C2.06701 47.5 0.5 45.933 0.5 44V4Z" stroke={color} />
    <line x1="45" y1="23.5" x2="67" y2="23.5" stroke={color} />
  </svg>
);

export default CoverLayoutStandard;
