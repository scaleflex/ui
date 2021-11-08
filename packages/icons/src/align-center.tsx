import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const AlignCenter = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M38 1.5C38 0.809644 37.4404 0.25 36.75 0.25H9.25C8.55964 0.25 8 0.809644 8 1.5C8 2.19036 8.55964 2.75 9.25 2.75H36.75C37.4404 2.75 38 2.19036 38 1.5Z"
        fill={color}
      />
      <path
        d="M45.5 14C45.5 13.3096 44.9404 12.75 44.25 12.75H1.75C1.05964 12.75 0.5 13.3096 0.5 14C0.5 14.6904 1.05964 15.25 1.75 15.25H44.25C44.9404 15.25 45.5 14.6904 45.5 14Z"
        fill={color}
      />
      <path
        d="M36.75 25.25C37.4404 25.25 38 25.8096 38 26.5C38 27.1904 37.4404 27.75 36.75 27.75H9.25C8.55964 27.75 8 27.1904 8 26.5C8 25.8096 8.55964 25.25 9.25 25.25H36.75Z"
        fill={color}
      />
    </svg>
  )
);

export default AlignCenter;
