import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const SidebarLeft = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M0.832886 47.2227C0.832886 48.2966 1.70344 49.1672 2.77733 49.1672C3.85122 49.1672 4.72177 48.2966 4.72177 47.2227L4.72178 2.7783C4.72178 1.70442 3.85122 0.833862 2.77733 0.833862C1.70345 0.833862 0.83289 1.70442 0.83289 2.7783L0.832886 47.2227Z"
        fill={color}
      />
      <path
        d="M12.5314 21.6629C12.1558 22.0289 11.9439 22.5311 11.9439 23.0555C11.9439 23.58 12.1558 24.0822 12.5314 24.4482L23.9349 35.5593C24.7041 36.3087 25.9351 36.2928 26.6845 35.5236C27.434 34.7545 27.418 33.5234 26.6488 32.774L18.6703 25H47.2217C48.2956 25 49.1661 24.1294 49.1661 23.0555C49.1661 21.9817 48.2956 21.1111 47.2217 21.1111L18.6703 21.1111L26.6488 13.3371C27.418 12.5877 27.434 11.3566 26.6846 10.5875C25.9351 9.81832 24.7041 9.80233 23.9349 10.5518L12.5314 21.6629Z"
        fill={color}
      />
    </svg>
  )
);

export default SidebarLeft;
