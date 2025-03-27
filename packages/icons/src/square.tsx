import React from 'react';
import type { IconProps } from './icon.props';

export const Square = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M42.25 1H9.25C5.1145 1 1.75 4.3645 1.75 8.5V41.5C1.75 45.6355 5.1145 49 9.25 49H42.25C46.3855 49 49.75 45.6355 49.75 41.5V8.5C49.75 4.3645 46.3855 1 42.25 1ZM46 41.5C46 43.5677 44.3177 45.25 42.25 45.25H9.25C7.18225 45.25 5.5 43.5677 5.5 41.5V8.5C5.5 6.43225 7.18225 4.75 9.25 4.75H42.25C44.3177 4.75 46 6.43225 46 8.5V41.5Z"
      fill={color}
    />
  </svg>
);

export default Square;
