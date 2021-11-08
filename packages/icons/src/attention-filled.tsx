import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const AttentionFilled = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', stroke = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
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
        d="M23.7009 1.50406C24.2783 0.504059 25.7216 0.504059 26.299 1.50406L49.0997 40.996C49.677 41.996 48.9553 43.246 47.8006 43.246H2.19927C1.04457 43.246 0.322885 41.996 0.900235 40.996L23.7009 1.50406ZM27.0002 15.7688C27.0002 14.6642 26.1048 13.7688 25.0002 13.7688C23.8957 13.7688 23.0002 14.6642 23.0002 15.7688V30.4945C23.0002 31.599 23.8957 32.4945 25.0002 32.4945C26.1048 32.4945 27.0002 31.599 27.0002 30.4945V15.7688ZM25.0003 38.2299C26.4225 38.2299 27.5755 37.077 27.5755 35.6547C27.5755 34.2325 26.4225 33.0795 25.0003 33.0795C23.578 33.0795 22.425 34.2325 22.425 35.6547C22.425 37.077 23.578 38.2299 25.0003 38.2299Z"
        fill={color}
        stroke={stroke}
      />
    </svg>
  )
);

export default AttentionFilled;
