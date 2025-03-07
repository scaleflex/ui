import React from 'react';
import type { IconProps } from './icon.props';

export const Cursor = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M25.332 0.00012207C26.6199 0.00012207 27.664 1.04419 27.664 2.3321V47.6681C27.664 48.9561 26.6199 50.0001 25.332 50.0001C24.0441 50.0001 23 48.9561 23 47.6681V2.3321C23 1.04419 24.0441 0.00012207 25.332 0.00012207Z"
      fill={color}
    />
  </svg>
);

export default Cursor;
