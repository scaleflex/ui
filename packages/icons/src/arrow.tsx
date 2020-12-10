import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

// Stroke #5D6D7E
export const Arrow = intrinsicComponent<IconProps, SVGSVGElement>((
  {
    stroke = 'currentColor', size = 10, ...rest
  },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size * 0.6}
    height={size}
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M1 1L5 4.85185L1 9" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
));

export default Arrow;
