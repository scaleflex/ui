import React from 'react';
import type { IconProps } from './icon.props';

export const Branding = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M42.8348 30.2344C42.5972 30.3997 37.6696 35.614 37.6696 39.2735C37.6696 43.1319 40.1205 45.5957 42.8348 45.73C45.1746 45.8436 48 43.4289 48 39.2735C48 35.3996 43.0724 30.3997 42.8348 30.2344ZM15.9397 45.73C16.9159 46.7062 18.2124 47.2434 19.5915 47.2434C20.9706 47.2434 22.267 46.7062 23.2433 45.73L41.3214 27.6519L13.6696 0L10.0178 3.65178L15.9397 9.57366L1.51335 24.0001C0.537133 24.9763 -4.57764e-05 26.2728 -4.57764e-05 27.6519C-4.57764e-05 29.031 0.537133 30.3274 1.51335 31.3036L15.9397 45.73ZM19.5915 13.2254L34.0178 27.6519H5.16513L19.5915 13.2254Z"
      fill={color}
    />
  </svg>
);

export default Branding;
