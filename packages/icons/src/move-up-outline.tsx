import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const MoveUpOutline = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 46 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2326 1.23271C22.2089 0.256404 23.7918 0.256417 24.7681 1.23274L44.7678 21.2327C45.7441 22.2091 45.7441 23.792 44.7678 24.7683C43.7914 25.7446 42.2085 25.7446 41.2322 24.7682L23.0003 6.53602L4.76775 24.7683C3.79143 25.7446 2.20852 25.7446 1.23222 24.7682C0.255916 23.7919 0.255928 22.209 1.23225 21.2327L21.2326 1.23271Z"
        fill={color}
      />
    </svg>
  )
);

export default MoveUpOutline;
