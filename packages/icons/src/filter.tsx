import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Filter = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M20.498 27.9212C20.8177 28.2409 20.9243 28.5606 20.9243 28.9869V48.9153C20.9243 49.8744 21.99 50.3007 22.6294 49.7679L29.9827 43.4803C30.1958 43.2672 30.409 42.9474 30.409 42.6277V29.0934C30.409 28.6672 30.5156 28.3474 30.8353 28.0277L45.3287 12.2555C45.9681 11.6161 45.4353 10.4438 44.5827 10.4438H6.7506C5.79148 10.4438 5.36518 11.5095 6.0046 12.2555L20.498 27.9212Z" fill={color} />
    <path d="M3.34035 0H47.8864C48.5258 0 48.952 0.426277 48.952 1.06569V6.07445C48.952 6.71386 48.5258 7.14014 47.8864 7.14014H3.34035C2.70094 7.14014 2.27466 6.71386 2.27466 6.07445V1.06569C2.27466 0.532847 2.8075 0 3.34035 0Z" fill={color} />
  </svg>
));

export default Filter;
