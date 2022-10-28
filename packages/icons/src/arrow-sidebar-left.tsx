import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ArrowSidebarLeft = intrinsicComponent<IconProps, SVGSVGElement>(
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25 50.0005C38.8071 50.0005 50 38.8076 50 25.0005C50 11.1934 38.8071 0.000488281 25 0.000488281C11.1929 0.000488281 0 11.1934 0 25.0005C0 38.8076 11.1929 50.0005 25 50.0005ZM25.6359 35.1773C26.2217 35.7927 27.1751 35.7705 27.7355 35.1357C28.2681 34.5323 28.2536 33.5901 27.6974 33.0058L20.36 25.2979L27.7348 16.9547C28.2679 16.3516 28.2539 15.4093 27.6981 14.8247C27.1128 14.209 26.1593 14.2303 25.5985 14.8647L17.2652 24.2924C17.0037 24.5881 16.8686 24.9745 16.8752 25.3648C16.8819 25.7551 17.0301 26.1368 17.3026 26.4231L25.6359 35.1773Z"
        fill={color}
      />
    </svg>
  )
);

export default ArrowSidebarLeft;
