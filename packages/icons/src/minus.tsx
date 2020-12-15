import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Minus = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size * (51 / 50)}
    height={size}
    viewBox="0 0 51 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M3.27478 28.001H47.2746C48.9318 28.001 50.2749 26.6579 50.2749 25.0003C50.2749 23.3431 48.9322 22 47.2746 22H3.27478C1.61803 22.0004 0.274902 23.3435 0.274902 25.0007C0.274902 26.6579 1.61803 28.001 3.27478 28.001Z" fill={color} />
  </svg>
));

export default Minus;
