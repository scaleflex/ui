import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Dot = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 6, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 6 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <circle cx="3" cy="3" r="3" fill={color} />
  </svg>
));

export default Dot;
