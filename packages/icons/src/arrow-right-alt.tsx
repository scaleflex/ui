import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ArrowRightAlt = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 11.0068C0 10.1946 0.658405 9.53622 1.47059 9.53622L45.2274 9.53736L38.8675 2.4705C38.3242 1.8668 38.3731 0.936966 38.9768 0.393656C39.5805 -0.149656 40.5103 -0.100698 41.0537 0.503004L49.6225 10.0243C50.1258 10.5836 50.1258 11.4326 49.6225 11.9918L41.0537 21.5131C40.5103 22.1169 39.5805 22.1658 38.9768 21.6225C38.3731 21.0792 38.3242 20.1494 38.8675 19.5456L45.2276 12.4785L1.47059 12.4774C0.658405 12.4774 0 11.819 0 11.0068Z"
        fill={color}
      />
    </svg>
  )
);

export default ArrowRightAlt;
