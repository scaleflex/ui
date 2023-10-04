import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CropSquareOutline = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.3059 3.68799H3.68091L3.68091 44.313H44.3059V3.68799ZM3.68091 0.562988C1.95502 0.562988 0.555908 1.9621 0.555908 3.68799V44.313C0.555908 46.0389 1.95502 47.438 3.68091 47.438H44.3059C46.0318 47.438 47.4309 46.0389 47.4309 44.313V3.68799C47.4309 1.9621 46.0318 0.562988 44.3059 0.562988H3.68091Z"
        fill={color}
      />
    </svg>
  )
);

export default CropSquareOutline;
