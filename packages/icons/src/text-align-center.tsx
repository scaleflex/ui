import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const TextAlignCenter = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 46 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M38 1.50049C38 0.810132 37.4404 0.250488 36.75 0.250488H9.25C8.55964 0.250488 8 0.810132 8 1.50049C8 2.19084 8.55964 2.75049 9.25 2.75049H36.75C37.4404 2.75049 38 2.19084 38 1.50049Z"
        fill={color}
      />
      <path
        d="M45.5 14.0005C45.5 13.3101 44.9404 12.7505 44.25 12.7505H1.75C1.05964 12.7505 0.5 13.3101 0.5 14.0005C0.5 14.6908 1.05964 15.2505 1.75 15.2505H44.25C44.9404 15.2505 45.5 14.6908 45.5 14.0005Z"
        fill={color}
      />
      <path
        d="M36.75 25.2505C37.4404 25.2505 38 25.8101 38 26.5005C38 27.1908 37.4404 27.7505 36.75 27.7505H9.25C8.55964 27.7505 8 27.1908 8 26.5005C8 25.8101 8.55964 25.2505 9.25 25.2505H36.75Z"
        fill={color}
      />
    </svg>
  )
);

export default TextAlignCenter;
