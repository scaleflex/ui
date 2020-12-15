import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Download = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 16, ...rest },
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
    <path d="M38.1079 22.7083C37.8996 22.1875 37.2746 21.7708 36.6496 21.7708H30.3996V1.5625C30.3996 0.729167 29.6704 0 28.8371 0H22.5871C21.7537 0 21.0246 0.729167 21.0246 1.5625V21.875H14.7746C14.1496 21.875 13.6287 22.1875 13.3162 22.8125C13.1079 23.3333 13.2121 24.0625 13.5246 24.4792L24.4621 36.9792C24.7746 37.2917 25.1912 37.5 25.6079 37.5C26.0246 37.5 26.4412 37.2917 26.7537 36.9792L37.6912 24.4792C38.3162 23.9583 38.3162 23.3333 38.1079 22.7083Z" fill={color} />
    <path d="M42.8997 34.375V43.75H8.52466V34.375H2.27466V46.875C2.27466 48.6458 3.62882 50 5.39966 50H46.0247C47.7955 50 49.1497 48.6458 49.1497 46.875V34.375H42.8997Z" fill={color} />
  </svg>
));

export default Download;
