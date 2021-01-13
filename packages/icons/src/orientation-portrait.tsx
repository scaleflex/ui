import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const OrientationPortrait = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M41.0963 50H8.47368C6.66132 50 5.27539 48.6141 5.27539 46.8017V3.19829C5.27539 1.38593 6.66132 0 8.47368 0H41.2029C43.0153 0 44.4012 1.38593 44.4012 3.19829V46.6951C44.2946 48.5075 42.9087 50 41.0963 50ZM8.47368 2.1322C7.83403 2.1322 7.40759 2.55864 7.40759 3.19829V46.6951C7.40759 47.3348 7.83403 47.7612 8.47368 47.7612H41.2029C41.8426 47.7612 42.269 47.3348 42.269 46.6951V3.19829C42.269 2.55864 41.8426 2.1322 41.2029 2.1322H8.47368Z" fill={color} />
    <path d="M24.785 3.73134L27.237 5.86354L29.5824 7.88913H19.9875L22.333 5.86354L24.785 3.73134Z" fill={color} />
    <path d="M24.785 45.9488L22.333 43.8166L19.9875 41.791H29.5824L27.237 43.8166L24.785 45.9488Z" fill={color} />
  </svg>
));

export default OrientationPortrait;
