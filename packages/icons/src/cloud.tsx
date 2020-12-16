import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Cloud = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M39.6497 20.0208C39.6497 15.3333 35.8997 11.4792 31.2122 11.4792C29.7538 11.4792 28.2955 11.8958 27.0455 12.5208C25.3788 9.29167 21.9413 7 17.983 7C12.358 7 7.87882 11.5833 7.87882 17.1042C7.87882 18.25 8.08716 19.3958 8.39966 20.3333C3.71216 21.6875 0.274658 26.0625 0.274658 31.1667C0.274658 37.4167 5.27466 42.4167 11.5247 42.4167C11.9413 42.4167 38.7122 42.4167 39.0247 42.4167C45.2747 42.4167 50.2747 37.4167 50.2747 31.1667C50.2747 25.2292 45.5872 20.3333 39.6497 20.0208Z" fill={color} />
  </svg>
));

export default Cloud;
