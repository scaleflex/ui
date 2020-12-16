import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const FileMoveTo = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M25.7367 0V10.575H36.517L25.7367 0Z" fill={color} />
    <path d="M24.094 12.3203V0H1.19869C0.685338 0 0.274658 0.410678 0.274658 0.924025V48.6653C0.274658 49.1787 0.685338 49.5894 1.19869 49.5894H35.593C36.1063 49.5894 36.517 49.1787 36.517 48.6653V12.3203H24.094Z" fill={color} />
    <path d="M47.7079 22.1767L45.0385 19.8153V22.7927H37.9543V26.1808H45.0385V29.1582L47.7079 26.7968L50.2747 24.5381L47.7079 22.1767Z" fill={color} />
  </svg>
));

export default FileMoveTo;
