import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Down = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M1.23229 1.23218C2.20863 0.255899 3.79154 0.255946 4.76782 1.23229L22.9989 19.4645L41.2323 1.23218C42.2086 0.255899 43.7915 0.255946 44.7678 1.23229C45.7441 2.20863 45.7441 3.79154 44.7677 4.76782L24.7665 24.7678C24.2977 25.2366 23.6618 25.5 22.9987 25.5C22.3357 25.5 21.6998 25.2366 21.231 24.7677L1.23218 4.76771C0.255899 3.79137 0.255946 2.20846 1.23229 1.23218Z"
        fill={color}
      />
    </svg>
  )
);

export default Down;
