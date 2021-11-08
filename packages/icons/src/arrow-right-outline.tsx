import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ArrowRightOutline = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M1.09286 0.710361C2.25057 -0.293042 4.05541 -0.225257 5.12407 0.861763L27.0685 23.1832C28.0772 24.2092 28.0772 25.7908 27.0685 26.8168L5.12407 49.1383C4.05541 50.2253 2.25057 50.2931 1.09286 49.2897C-0.0648579 48.2863 -0.137051 46.5916 0.93161 45.5046L21.0899 25L0.93161 4.49541C-0.137051 3.40839 -0.0648579 1.71376 1.09286 0.710361Z"
        fill={color}
      />
    </svg>
  )
);

export default ArrowRightOutline;
