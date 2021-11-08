import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Landscape = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M3.125 3.93748V32.0625H46.875V3.93748H3.125ZM2.5 0.812475C1.11929 0.812475 0 1.91178 0 3.26783V32.7321C0 34.0882 1.11929 35.1875 2.5 35.1875H47.5C48.8807 35.1875 50 34.0882 50 32.7321V3.26783C50 1.91178 48.8807 0.812475 47.5 0.812475H2.5Z"
        fill={color}
      />
    </svg>
  )
);

export default Landscape;
