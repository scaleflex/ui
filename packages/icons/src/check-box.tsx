import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CheckBox = intrinsicComponent<IconProps, SVGSVGElement>((
  {
    color = '#F8FAFB', stroke = '#DFE7ED', stroke2 = 'currentColor', size = 16, ...rest
  },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <rect x="0.5" y="0.5" width="15" height="15" rx="0.5" fill={color} stroke={stroke} />
    <path d="M3 8L7 13L13 3" stroke={stroke2} strokeWidth="2" strokeLinejoin="round" />
  </svg>
));

export default CheckBox;
