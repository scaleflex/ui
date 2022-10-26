import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Vector = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M45.5882 20.5882C43.6711 20.5882 42.0365 21.8177 41.4294 23.5294H29.1588C27.7831 19.6654 22.3045 19.6224 20.8662 23.4599C15.7498 22.8669 11.7647 18.508 11.7647 13.2353V8.82353H14.7059V0H5.88235V8.82353H8.82353V13.2353C8.82353 17.3889 10.7474 21.1011 13.7501 23.5294H8.57059C6.86618 18.9238 0.0939216 20.0275 0 25.0001C0.0943137 29.9733 6.86716 31.0755 8.57059 26.4706H20.8412C22.2169 30.3346 27.6956 30.3776 29.1338 26.5401C34.2502 27.1331 38.2353 31.4919 38.2353 36.7647V41.1765H35.2941V50H44.1177V41.1765H41.1765V36.7647C41.1765 32.6111 39.2527 28.8989 36.2499 26.4706H41.4295C43.1345 31.0768 49.9063 29.972 50.0001 24.9999C50 22.5674 48.021 20.5882 45.5882 20.5882Z"
        fill={color}
      />
    </svg>
  )
);

export default Vector;
