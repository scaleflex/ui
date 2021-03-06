import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const RadioButton = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = '#F8FAFB', stroke = '#DFE7ED', color2 = 'currentColor', size = 16, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill={color} stroke={stroke} />
      <rect x="3" y="3" width="10" height="10" rx="5" fill={color2} />
    </svg>
  )
);

export default RadioButton;
