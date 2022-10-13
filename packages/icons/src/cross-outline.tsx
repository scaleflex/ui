import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CrossOutline = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M43.3196 40.0403C44.2253 40.9461 44.2253 42.4146 43.3196 43.3204C42.4138 44.2262 40.9453 44.2262 40.0396 43.3204L21.9997 25.2802L3.95952 43.3207C3.05376 44.2264 1.58525 44.2264 0.679494 43.3207C-0.226258 42.4149 -0.226258 40.9464 0.679495 40.0406L18.7197 22.0001L0.679313 3.95941C-0.226437 3.05364 -0.226439 1.5851 0.679314 0.679328C1.58507 -0.226442 3.05358 -0.226443 3.95934 0.679328L21.9997 18.72L40.0398 0.679604C40.9455 -0.226163 42.414 -0.226165 43.3198 0.679605C44.2255 1.58537 44.2255 3.05392 43.3198 3.95969L25.2797 22.0001L43.3196 40.0403Z"
        fill={color}
      />
    </svg>
  )
);

export default CrossOutline;
