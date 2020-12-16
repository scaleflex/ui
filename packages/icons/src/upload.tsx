import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Upload = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M10.4248 18.1913C10.7367 18.9189 11.4643 19.3347 12.1919 19.3347H18.4289V37.1102C18.4289 37.7339 18.9487 38.2536 19.5724 38.2536H32.0464C32.6701 38.2536 33.1899 37.7339 33.1899 37.1102V19.3347H39.2189C39.9466 19.3347 40.6743 18.9189 40.9861 18.1913C41.298 17.4636 41.194 16.736 40.6743 16.1123L27.1608 0.623698C26.745 0.207898 26.2252 0 25.7054 0C25.1857 0 24.6659 0.207898 24.2501 0.623698L10.7366 16.1123C10.3208 16.736 10.113 17.5676 10.4248 18.1913Z" fill={color} />
    <path d="M41.194 43.9709H10.3208V50H41.194V43.9709Z" fill={color} />
  </svg>
));

export default Upload;
