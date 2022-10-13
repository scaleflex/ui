import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ClosePanel = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 52 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 22.875C-1.17898e-08 22.6053 0.108954 22.347 0.302135 22.1588L13.1311 9.65876C13.5266 9.27334 14.1598 9.28157 14.5452 9.67713C14.9306 10.0727 14.9224 10.7058 14.5268 11.0912L3.45926 21.875H38.5C39.0523 21.875 39.5 22.3227 39.5 22.875C39.5 23.4273 39.0523 23.875 38.5 23.875H3.45926L14.5268 34.6588C14.9224 35.0442 14.9306 35.6773 14.5452 36.0729C14.1598 36.4684 13.5266 36.4766 13.1311 36.0912L0.302135 23.5912C0.108954 23.403 1.17898e-08 23.1447 0 22.875Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51 0C51.5523 0 52 0.447715 52 1V44.75C52 45.3023 51.5523 45.75 51 45.75C50.4477 45.75 50 45.3023 50 44.75V1C50 0.447715 50.4477 0 51 0Z"
        fill={color}
      />
    </svg>
  )
);

export default ClosePanel;
