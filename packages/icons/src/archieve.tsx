import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Archieve = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 42 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M2.715 13.1032V38.0071C2.715 38.8609 3.41905 39.525 4.21697 39.525H37.7297C38.5746 39.525 39.2317 38.8135 39.2317 38.0071V13.1032H2.715ZM28.5771 22.6378C28.5771 23.4916 27.873 24.1558 27.0751 24.1558H14.8716C14.0267 24.1558 13.3696 23.4442 13.3696 22.6378V19.5545C13.3696 18.7006 14.0737 18.0365 14.8716 18.0365H27.0751C27.92 18.0365 28.5771 18.7481 28.5771 19.5545V22.6378Z"
        fill={color}
      />
      <path
        d="M39.7512 0.577637H2.20189C1.35703 0.577637 0.699921 1.28918 0.699921 2.09559V11.061H41.3001V2.14302C41.2532 1.28918 40.5961 0.577637 39.7512 0.577637Z"
        fill={color}
      />
    </svg>
  )
);

export default Archieve;
