import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Rename = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M17.5556 44.1773L6.09733 32.7191L33.7443 5.07212L45.2025 16.5304L17.5556 44.1773ZM5.04612 34.7164L15.5583 45.2285L1.47198 49.959C0.736126 50.1693 0.105406 49.5385 0.315649 48.8027L5.04612 34.7164ZM48.7767 12.9562L46.7794 14.9535L35.3211 3.49529L37.3184 1.49798C39.3157 -0.499327 42.5745 -0.499327 44.5718 1.49798L48.7767 5.70284C50.774 7.70015 50.774 10.9589 48.7767 12.9562Z"
        fill={color}
      />
    </svg>
  )
);

export default Rename;
