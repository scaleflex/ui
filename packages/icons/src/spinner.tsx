import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Spinner = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 28, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M41.3465 44.355C33.5656 50.7844 22.9687 51.6268 14.3708 47.3665L17.8949 44.4545C24.754 47.117 32.7424 46.1093 38.709 41.1792C44.6755 36.249 47.1546 28.6071 45.8085 21.3893L49.3325 18.4773C51.9291 27.6967 49.1274 37.9256 41.3465 44.355Z" fill={color} />
    <path d="M36.1749 2.63356L32.6509 5.54555C25.821 2.91828 17.838 3.86187 11.8366 8.82088C5.87009 13.7511 3.42028 21.4282 4.7372 28.6107L1.21311 31.5227C-1.38344 22.3034 1.45314 12.0456 9.19916 5.64502C16.9801 -0.784402 27.5768 -1.62682 36.1749 2.63356Z" fill={color} />
  </svg>
));

export default Spinner;
