import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const MoveDownOutline = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 46 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.23229 1.23267C2.20863 0.256387 3.79154 0.256434 4.76782 1.23277L22.9989 19.465L41.2323 1.23267C42.2086 0.256387 43.7915 0.256434 44.7678 1.23277C45.7441 2.20911 45.7441 3.79203 44.7677 4.76831L24.7665 24.7683C24.2977 25.2371 23.6618 25.5005 22.9987 25.5005C22.3357 25.5005 21.6998 25.2371 21.231 24.7682L1.23218 4.7682C0.255899 3.79186 0.255946 2.20895 1.23229 1.23267Z"
        fill={color}
      />
    </svg>
  )
);

export default MoveDownOutline;
