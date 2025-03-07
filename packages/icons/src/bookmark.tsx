import React from 'react';
import type { IconProps } from './icon.props';

export const Bookmark = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 35 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M34.9488 6.84238H3.05176e-05V2.10535C3.05176e-05 0.947406 0.947436 0 2.10538 0H32.8434C34.0014 0 34.9488 0.947406 34.9488 2.10535V6.84238Z"
      fill={color}
    />
    <path
      d="M33.2645 49.7384L17.4744 37.4222L1.57904 49.7384C0.947436 50.2648 3.05176e-05 49.7384 3.05176e-05 48.791V9H34.9488V29V48.75C34.9488 49.6974 34.0014 50.2648 33.2645 49.7384Z"
      fill={color}
    />
  </svg>
);

export default Bookmark;
