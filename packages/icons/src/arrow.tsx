import React from 'react';
import type { IconProps } from './icon.props';

export const Arrow = ({ stroke = 'currentColor', size = 10, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size * (51 / 56)}
    height={size}
    viewBox="0 0 51 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M12.2754 3L37.2754 27.0741L12.2754 53"
      stroke={stroke}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Arrow;
