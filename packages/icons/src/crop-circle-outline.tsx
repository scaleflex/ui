import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CropCircleOutline = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.1981 46.8755C37.2794 46.8755 47.0731 37.0817 47.0731 25.0005C47.0731 12.9193 37.2794 3.12549 25.1981 3.12549C13.1169 3.12549 3.32312 12.9193 3.32312 25.0005C3.32312 37.0817 13.1169 46.8755 25.1981 46.8755ZM25.1981 50.0005C39.0052 50.0005 50.1981 38.8076 50.1981 25.0005C50.1981 11.1934 39.0052 0.000488281 25.1981 0.000488281C11.391 0.000488281 0.19812 11.1934 0.19812 25.0005C0.19812 38.8076 11.391 50.0005 25.1981 50.0005Z"
        fill={color}
      />
    </svg>
  )
);

export default CropCircleOutline;
