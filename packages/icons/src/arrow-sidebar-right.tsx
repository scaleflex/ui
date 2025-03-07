import React from 'react';
import type { IconProps } from './icon.props';

export const ArrowSidebarRight = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M25 50.0005C38.8071 50.0005 50 38.8076 50 25.0005C50 11.1934 38.8071 0.000488281 25 0.000488281C11.1929 0.000488281 0 11.1934 0 25.0005C0 38.8076 11.1929 50.0005 25 50.0005ZM24.3641 14.8239C23.7783 14.2086 22.8249 14.2307 22.2645 14.8655C21.7319 15.4689 21.7464 16.4112 22.3026 16.9955L29.6399 24.7034L22.2652 33.0466C21.7321 33.6496 21.7461 34.5919 22.3019 35.1765C22.8872 35.7923 23.8406 35.771 24.4015 35.1365L32.7348 25.7089C32.9963 25.4131 33.1314 25.0267 33.1248 24.6365C33.1181 24.2462 32.9699 23.8644 32.6974 23.5782L24.3641 14.8239Z"
      fill={color}
    />
  </svg>
);

export default ArrowSidebarRight;
