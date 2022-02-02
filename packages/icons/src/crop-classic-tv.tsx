import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CropClassicTv = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 44 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.125 2.37561C0.125 1.51267 0.824555 0.81311 1.6875 0.81311H42.3125C43.1754 0.81311 43.875 1.51267 43.875 2.37561V33.6256C43.875 34.4886 43.1754 35.1881 42.3125 35.1881H1.6875C0.824555 35.1881 0.125 34.4886 0.125 33.6256V2.37561ZM3.25 3.93811V32.0631H40.75V3.93811H3.25Z"
        fill={color}
      />
    </svg>
  )
);

export default CropClassicTv;
