import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Search = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M44.8536 47.6383L32.947 37.4596C28.9393 40.6797 23.7488 42.2147 18.6058 41.6246C8.02873 40.411 0.369785 30.9133 1.56681 20.495C2.76383 10.0766 12.3775 2.56074 22.9546 3.77433C33.5317 4.98792 41.1906 14.4856 39.9936 24.904C39.5873 28.4405 38.2325 31.6745 36.0484 34.426L48.2992 45.0316C48.6435 45.4584 48.7716 46.0542 48.7057 46.6277C48.6398 47.2011 48.3909 47.6568 47.9478 48.0902C47.5157 48.428 46.9115 48.5523 46.3293 48.4855C45.7471 48.4187 45.1868 48.1607 44.8536 47.6383ZM5.54534 20.9514C4.6009 29.1715 10.6248 36.6415 18.97 37.599C27.3152 38.5566 34.8766 32.6452 35.821 24.4252C36.7654 16.2052 30.7415 8.73513 22.3963 7.77762C14.1591 6.73566 6.48978 12.7314 5.54534 20.9514Z" fill={color} stroke={color} strokeWidth="0.5" />
  </svg>
));

export default Search;
