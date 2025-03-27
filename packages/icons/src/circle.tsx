import React from 'react';
import type { IconProps } from './icon.props';

export const Circle = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 51 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.75 46C37.348 46 46.75 36.598 46.75 25C46.75 13.402 37.348 4 25.75 4C14.152 4 4.75 13.402 4.75 25C4.75 36.598 14.152 46 25.75 46ZM25.75 50C39.5571 50 50.75 38.8071 50.75 25C50.75 11.1929 39.5571 0 25.75 0C11.9429 0 0.75 11.1929 0.75 25C0.75 38.8071 11.9429 50 25.75 50Z"
      fill={color}
    />
  </svg>
);

export default Circle;
