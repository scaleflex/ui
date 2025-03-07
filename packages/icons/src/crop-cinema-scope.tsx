import React from 'react';
import type { IconProps } from './icon.props';

export const CropCinemaScope = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1.62561C0 0.762665 0.699555 0.0631104 1.5625 0.0631104H48.4375C49.3004 0.0631104 50 0.762665 50 1.62561V20.3756C50 21.2386 49.3004 21.9381 48.4375 21.9381H1.5625C0.699555 21.9381 0 21.2386 0 20.3756V1.62561ZM3.125 3.18811V18.8131H46.875V3.18811H3.125Z"
      fill={color}
    />
  </svg>
);

export default CropCinemaScope;
