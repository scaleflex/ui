import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Crop = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <g clipPath="url(#clip0)">
      <path d="M48.9077 36.4453H45.0014V11.4453H8.47797V6.36717C8.47797 5.58594 7.89204 5 7.1108 5C6.32957 5 5.93893 5.78123 5.93893 6.36717V11.4453H1.64207C0.86084 11.4453 0.274902 12.0313 0.274902 12.8125C0.274902 13.5937 0.86084 14.1797 1.64207 14.1797H6.13428V38.9843H42.2671V43.4765C42.2671 44.2578 42.8531 44.8437 43.6343 44.8437C44.4155 44.8437 45.0015 44.2578 45.0015 43.4765V38.9843H48.9077C49.689 38.9843 50.2749 38.3984 50.2749 37.6172C50.2749 36.8359 49.4937 36.4453 48.9077 36.4453L48.9077 36.4453ZM8.47797 36.4453V14.1797H42.2671V36.4453H8.47797Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="50" height="50" fill="white" transform="translate(0.274902)" />
      </clipPath>
    </defs>
  </svg>
));

export default Crop;
