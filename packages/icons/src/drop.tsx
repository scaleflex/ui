import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Drop = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M34.6396 12.726C30.702 6.57764 26.7071 1.50674 26.6673 1.45615L25.517 0L24.3668 1.45625C24.327 1.50674 20.3321 6.57764 16.3945 12.7261C11.0066 21.1387 8.2749 27.5085 8.2749 31.6586C8.2749 41.7721 16.0097 50 25.5171 50C35.0245 50 42.7593 41.7721 42.7593 31.6586C42.7592 27.5085 40.0274 21.1387 34.6396 12.726Z" fill={color} />
  </svg>
));

export default Drop;
