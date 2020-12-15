import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Comment = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M50.2749 33.6066C50.2749 36.0911 48.308 38.058 45.8236 38.058H20.0472L8.03888 46.4431V38.058H4.72625C2.24178 38.058 0.274902 36.0911 0.274902 33.6066V8.45135C0.274902 5.96688 2.24178 4 4.72625 4H45.8236C48.308 4 50.2749 5.96688 50.2749 8.45135V33.6066Z" fill={color} />
  </svg>
));

export default Comment;
