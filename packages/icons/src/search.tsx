import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Search = intrinsicComponent<IconProps, SVGSVGElement>((
  {
    color = '#5D6D7E', stroke = '#5D6D7E', size = 14, ...rest
  },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M12.4819 13.3388L9.14808 10.4888C8.02592 11.3904 6.57258 11.8202 5.13254 11.655C2.17096 11.3152 0.0264595 8.65582 0.361625 5.73867C0.696791 2.82153 3.38863 0.717092 6.35021 1.0569C9.31179 1.3967 11.4563 4.05605 11.1211 6.9732C11.0074 7.96342 10.628 8.86894 10.0165 9.63936L13.4467 12.6089C13.5431 12.7284 13.579 12.8953 13.5605 13.0558C13.5421 13.2164 13.4724 13.344 13.3483 13.4653C13.2273 13.5599 13.0582 13.5947 12.8951 13.576C12.7321 13.5573 12.5752 13.4851 12.4819 13.3388ZM1.47561 5.86649C1.21117 8.16809 2.89786 10.2597 5.23452 10.5278C7.57118 10.7959 9.68836 9.14075 9.9528 6.83914C10.2172 4.53754 8.53055 2.44592 6.19389 2.17782C3.88748 1.88607 1.74006 3.56489 1.47561 5.86649Z" fill={color} stroke={stroke} strokeWidth="0.5" />
  </svg>
));

export default Search;
