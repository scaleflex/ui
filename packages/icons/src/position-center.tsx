import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const PositionCenter = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M25.0002 28.9996C27.2094 28.9996 29.0002 27.2087 29.0002 24.9996C29.0002 22.7905 27.2094 20.9996 25.0002 20.9996C22.7911 20.9996 21.0002 22.7905 21.0002 24.9996C21.0002 27.2087 22.7911 28.9996 25.0002 28.9996Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.66672 0.999927C2.19396 0.999927 1.00005 2.19384 1.00005 3.66659V46.3333C1.00005 47.806 2.19396 48.9999 3.66672 48.9999H46.3334C47.8061 48.9999 49 47.806 49 46.3333V3.66659C49 2.19383 47.8061 0.999927 46.3334 0.999927H3.66672ZM46.3334 3.66659H3.66672V46.3333H46.3334V3.66659Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.6334 4.36659H4.36672V45.6333H45.6334V4.36659ZM0.300049 3.66659C0.300049 1.80724 1.80736 0.299927 3.66672 0.299927H46.3334C48.1927 0.299927 49.7001 1.80723 49.7001 3.66659V46.3333C49.7001 48.1926 48.1927 49.6999 46.3334 49.6999H3.66672C1.80736 49.6999 0.300049 48.1926 0.300049 46.3333V3.66659ZM29.7002 24.9996C29.7002 27.5953 27.596 29.6996 25.0002 29.6996C22.4045 29.6996 20.3002 27.5953 20.3002 24.9996C20.3002 22.4039 22.4045 20.2996 25.0002 20.2996C27.596 20.2996 29.7002 22.4039 29.7002 24.9996ZM1.00005 3.66659C1.00005 2.19384 2.19396 0.999927 3.66672 0.999927H46.3334C47.8061 0.999927 49 2.19383 49 3.66659V46.3333C49 47.806 47.8061 48.9999 46.3334 48.9999H3.66672C2.19396 48.9999 1.00005 47.806 1.00005 46.3333V3.66659ZM46.3334 3.66659V46.3333H3.66672V3.66659H46.3334ZM29.0002 24.9996C29.0002 27.2087 27.2094 28.9996 25.0002 28.9996C22.7911 28.9996 21.0002 27.2087 21.0002 24.9996C21.0002 22.7905 22.7911 20.9996 25.0002 20.9996C27.2094 20.9996 29.0002 22.7905 29.0002 24.9996Z"
        fill={color}
      />
    </svg>
  )
);

export default PositionCenter;
