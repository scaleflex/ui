import React from 'react';
import type { IconProps } from './icon.props';

export const Contrast = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.4376 40.6858V38.5625V4.18746V3.31418C10.8133 4.10816 3.25006 12.1708 3.25006 22C3.25006 31.8292 10.8133 39.8918 20.4376 40.6858ZM40.7501 22C40.7501 31.8292 33.1868 39.8918 23.5626 40.6858V38.5625V4.18746V3.31418C33.1868 4.10816 40.7501 12.1708 40.7501 22ZM43.8751 22C43.8751 34.0812 34.0813 43.875 22.0001 43.875C9.91883 43.875 0.125061 34.0812 0.125061 22C0.125061 9.91877 9.91883 0.125 22.0001 0.125C34.0813 0.125 43.8751 9.91877 43.8751 22Z"
      fill={color}
    />
  </svg>
);

export default Contrast;
