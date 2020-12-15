import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const FlipHorizontally = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <g clipPath="url(#clip0)">
      <path d="M44.8234 22.0645L6.91866 0.154227C6.1518 -0.283978 5.27539 0.263779 5.27539 1.14019V23.0504C5.27539 23.7077 5.7136 24.146 6.3709 24.146H44.3852C45.4807 24.146 45.8094 22.7218 44.8234 22.0645Z" fill={color} />
      <path d="M44.2756 26.9942L6.26135 48.9045V26.9942H44.2756ZM44.2756 25.8987H6.3709C5.7136 25.8987 5.27539 26.3369 5.27539 26.9942V48.9045C5.27539 49.5618 5.82315 50 6.3709 50C6.59001 50 6.69956 50 6.91866 49.8904L44.9329 27.9802C45.8093 27.3229 45.4807 25.8987 44.2756 25.8987Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="50" height="50" fill="white" transform="translate(0.275391)" />
      </clipPath>
    </defs>
  </svg>
));

export default FlipHorizontally;
