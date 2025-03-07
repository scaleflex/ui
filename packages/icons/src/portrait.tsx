import React from 'react';
import type { IconProps } from './icon.props';

export const Portrait = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 36 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.0559 46.8755L32.0559 3.12555L3.93091 3.12555L3.93091 46.8755H32.0559ZM35.1809 3.12555C35.1809 1.39966 33.7818 0.000549316 32.0559 0.000549316H3.93091C2.20502 0.000549316 0.805908 1.39966 0.805908 3.12555V46.8755C0.805908 48.6014 2.20502 50.0005 3.93091 50.0005H32.0559C33.7818 50.0005 35.1809 48.6014 35.1809 46.8755L35.1809 3.12555Z"
      fill={color}
    />
  </svg>
);

export default Portrait;
