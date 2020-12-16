import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Labels = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M42.3289 6.84238H7.38018V2.10535C7.38018 0.947406 8.32758 0 9.48552 0H40.2236C41.3815 0 42.3289 0.947406 42.3289 2.10535V6.84238Z" fill={color} />
    <path d="M40.5394 49.7914L24.7493 37.4752L8.85391 49.7914C8.22231 50.3178 7.2749 49.7914 7.2749 48.844V9.05299H42.1184V48.844C42.1184 49.7914 41.2763 50.3178 40.5394 49.7914Z" fill={color} />
  </svg>
));

export default Labels;
