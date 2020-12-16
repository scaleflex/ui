import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const More = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M5.2528 29.6154C8.00202 29.6154 10.2307 27.4629 10.2307 24.8077C10.2307 22.1525 8.00202 20 5.2528 20C2.50358 20 0.274902 22.1525 0.274902 24.8077C0.274902 27.4629 2.50358 29.6154 5.2528 29.6154Z" fill={color} />
    <path d="M25.2751 29.6154C28.0243 29.6154 30.253 27.4629 30.253 24.8077C30.253 22.1525 28.0243 20 25.2751 20C22.5259 20 20.2972 22.1525 20.2972 24.8077C20.2972 27.4629 22.5259 29.6154 25.2751 29.6154Z" fill={color} />
    <path d="M45.297 29.6154C48.0462 29.6154 50.2749 27.4629 50.2749 24.8077C50.2749 22.1525 48.0462 20 45.297 20C42.5478 20 40.3191 22.1525 40.3191 24.8077C40.3191 27.4629 42.5478 29.6154 45.297 29.6154Z" fill={color} />
  </svg>
));

export default More;
