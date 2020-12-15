import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Play = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M41.0589 20.3571L13.2858 1.34373C12.0032 0.465043 10.7109 0 9.63673 0C7.56003 0 6.27539 1.66671 6.27539 4.45656V45.5499C6.27539 48.3365 7.55841 50 9.63026 50C10.706 50 11.9777 49.5345 13.2632 48.6534L41.0492 29.6405C42.8361 28.4158 43.8257 26.7677 43.8257 24.9978C43.8261 23.2291 42.8478 21.5814 41.0589 20.3571Z" fill={color} />
  </svg>
));

export default Play;
