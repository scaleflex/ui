import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Miniplayer = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M22.2222 16.8339C20.6881 16.8339 19.4444 18.0776 19.4444 19.6117V30.7228C19.4444 32.2569 20.6881 33.5006 22.2222 33.5006H38.8889C40.423 33.5006 41.6667 32.2569 41.6667 30.7228V19.6117C41.6667 18.0776 40.423 16.8339 38.8889 16.8339H22.2222Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5.72279C0 2.65454 2.48731 0.167236 5.55556 0.167236H44.4444C47.5127 0.167236 50 2.65454 50 5.72279V36.2784C50 39.3466 47.5127 41.8339 44.4444 41.8339H5.55555C2.48731 41.8339 0 39.3466 0 36.2784V5.72279ZM5.55556 4.61168H44.4444C45.0581 4.61168 45.5556 5.10914 45.5556 5.72279V36.2784C45.5556 36.892 45.0581 37.3895 44.4444 37.3895H5.55555C4.94191 37.3895 4.44444 36.892 4.44444 36.2784V5.72279C4.44444 5.10914 4.94191 4.61168 5.55556 4.61168Z"
        fill={color}
      />
    </svg>
  )
);

export default Miniplayer;
