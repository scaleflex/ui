import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Menu = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
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
        d="M0 7.75049C0 6.92206 0.671573 6.25049 1.5 6.25049H48.5C49.3284 6.25049 50 6.92206 50 7.75049V9.43806C50 10.2665 49.3284 10.9381 48.5 10.9381H1.5C0.671571 10.9381 0 10.2665 0 9.43806V7.75049ZM0 24.1567C0 23.3283 0.671573 22.6567 1.5 22.6567H48.5C49.3284 22.6567 50 23.3283 50 24.1567V25.8443C50 26.6727 49.3284 27.3443 48.5 27.3443H1.5C0.671571 27.3443 0 26.6727 0 25.8443V24.1567ZM1.5 39.0629C0.671573 39.0629 0 39.7345 0 40.5629V42.2505C0 43.0789 0.671571 43.7505 1.5 43.7505H48.5C49.3284 43.7505 50 43.0789 50 42.2505V40.5629C50 39.7345 49.3284 39.0629 48.5 39.0629H1.5Z"
        fill={color}
      />
    </svg>
  )
);

export default Menu;
