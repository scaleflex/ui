import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CrossOutline = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M29.5089 27.2774C30.1253 27.8938 30.1253 28.8932 29.5089 29.5096C28.8925 30.126 27.8932 30.126 27.2768 29.5096L15.0002 17.2327L2.72342 29.5097C2.10703 30.1261 1.10767 30.1261 0.491282 29.5097C-0.125105 28.8934 -0.125105 27.894 0.491283 27.2776L12.7681 15.0006L0.491159 2.72344C-0.125226 2.10704 -0.125228 1.10766 0.49116 0.49126C1.10755 -0.125138 2.10691 -0.125139 2.72329 0.49126L15.0002 12.7684L27.2769 0.491449C27.8933 -0.124948 28.8927 -0.12495 29.5091 0.491449C30.1254 1.10785 30.1254 2.10723 29.5091 2.72363L17.2323 15.0006L29.5089 27.2774Z"
        fill={color}
      />
    </svg>
  )
);

export default CrossOutline;
