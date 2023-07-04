import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const GoogleDrive = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M24.2545 17.9611L8.14951 45.8206L0 31.7172L16.1152 3.84757L24.2545 17.9611Z" fill={color} />
      <path d="M49.9592 30.8696L33.6601 30.8901L17.5858 2.99994H33.9052L49.9592 30.8696Z" fill={color} />
      <path d="M50 32.5751L41.8607 46.6785L9.62011 46.658L17.7696 32.5649L50 32.5751Z" fill={color} />
    </svg>
  )
);

export default GoogleDrive;
