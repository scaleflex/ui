import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ArrowRightOutline = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 28 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.09286 0.71085C2.25057 -0.292553 4.05541 -0.224769 5.12407 0.862251L27.0685 23.1837C28.0772 24.2097 28.0772 25.7913 27.0685 26.8173L5.12407 49.1388C4.05541 50.2258 2.25057 50.2936 1.09286 49.2902C-0.0648579 48.2868 -0.137051 46.5921 0.93161 45.5051L21.0899 25.0005L0.93161 4.49589C-0.137051 3.40888 -0.0648579 1.71425 1.09286 0.71085Z"
        fill={color}
      />
    </svg>
  )
);

export default ArrowRightOutline;
