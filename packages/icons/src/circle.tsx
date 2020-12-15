import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Circle = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M25.2748 0.00012207C11.4624 0.00012207 0.274902 11.1877 0.274902 25.0001C0.274902 38.8125 11.4624 50 25.2748 50C39.0873 50 50.2749 38.8126 50.2749 25.0001C50.2749 11.1875 39.0874 0.00012207 25.2748 0.00012207ZM25.2748 45.0001C14.2249 45.0001 5.27482 36.0501 5.27482 25.0001C5.27482 13.95 14.2249 5.00016 25.2748 5.00016C36.3248 5.00016 45.2749 13.9501 45.2749 25.0001C45.2749 36.05 36.3249 45.0001 25.2748 45.0001Z" fill={color} />
  </svg>
));

export default Circle;
