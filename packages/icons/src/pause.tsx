import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Pause = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 28 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M0.111115 4.94511C0.111115 2.64392 1.97659 0.778442 4.27778 0.778442C6.57897 0.778442 8.44445 2.64392 8.44445 4.94511V41.0562C8.44445 43.3574 6.57897 45.2229 4.27778 45.2229C1.97659 45.2229 0.111115 43.3574 0.111115 41.0562V4.94511Z"
        fill={color}
      />
      <path
        d="M19.5556 4.94511C19.5556 2.64392 21.421 0.778442 23.7222 0.778442C26.0234 0.778442 27.8889 2.64392 27.8889 4.94511V41.0562C27.8889 43.3574 26.0234 45.2229 23.7222 45.2229C21.421 45.2229 19.5556 43.3574 19.5556 41.0562V4.94511Z"
        fill={color}
      />
    </svg>
  )
);

export default Pause;
