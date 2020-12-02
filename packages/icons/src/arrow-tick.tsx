import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

// color #5D6D7E
export const ArrowTick = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 8, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size * 0.5}
    height={size}
    viewBox="0 0 4 8"
    // fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M4 4L0 -1.65782e-07L-3.49691e-07 8L4 4Z" fill={color} />
  </svg>
));

export default ArrowTick;
