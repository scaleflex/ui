import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Crop = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M5 2.00049C3.34315 2.00049 2 3.34364 2 5.00049V16.7505H5.5V5.50049H16.75V2.00049H5ZM45 2.00049H33.25V5.50049H44.5V16.7505H48V5.00049C48 3.34363 46.6569 2.00049 45 2.00049ZM5.5 33.2505H2V45.0005C2 46.6573 3.34315 48.0005 5 48.0005H16.75V44.5005H5.5V33.2505ZM48 33.2505H44.5V44.5005H33.25V48.0005H45C46.6569 48.0005 48 46.6573 48 45.0005V33.2505Z"
        fill={color}
      />
    </svg>
  )
);

export default Crop;
