import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Folder = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
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
    <path d="M49.2267 10.1898H21.5537L20.5055 7.59973C19.2476 4.69887 17.5705 5.00968 16.9416 5.00968H1.32312C0.694189 5.00968 0.274902 5.52769 0.274902 6.0457V11.2258V13.7122V43.964C0.274902 44.482 0.694189 45 1.32312 45H49.2267C49.7508 45 50.2749 44.482 50.2749 43.964V11.2258C50.2749 10.7078 49.7508 10.1898 49.2267 10.1898Z" fill={color} />
  </svg>
));

export default Folder;
