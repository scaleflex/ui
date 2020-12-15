import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Line = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M40.1901 7.27549L7.59689 39.8687C6.83412 40.6315 6.83412 41.8681 7.59689 42.6308C8.35965 43.3936 9.59626 43.3936 10.359 42.6308L42.9522 10.0376C43.715 9.27486 43.715 8.03825 42.9522 7.27549C42.1895 6.51272 40.9529 6.51272 40.1901 7.27549Z" fill={color} />
  </svg>
));

export default Line;
