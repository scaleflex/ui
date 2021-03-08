import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Music = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <path
        d="M48.5749 1.3375C48.1749 1.0375 47.6749 0.937501 47.1749 1.0375L16.2749 7.93749C15.4749 8.13749 14.9749 8.8375 14.9749 9.6375V36.7375C13.5749 35.8375 11.7749 35.3375 9.8749 35.3375C5.1749 35.3375 1.2749 38.4375 1.2749 42.2375C1.2749 46.0375 5.0749 49.1375 9.8749 49.1375C14.6749 49.1375 18.4749 46.0375 18.4749 42.2375V21.2375L45.8749 15.1375V29.8375C44.4749 28.9375 42.6749 28.4375 40.7749 28.4375C36.0749 28.4375 32.1749 31.5375 32.1749 35.3375C32.1749 39.1375 35.9749 42.2375 40.7749 42.2375C45.4749 42.2375 49.3749 39.1375 49.3749 35.3375V2.7375C49.1749 2.1375 48.9749 1.6375 48.5749 1.3375Z"
        fill={color}
      />
    </svg>
  )
);

export default Music;
