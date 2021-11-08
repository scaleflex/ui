import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Polygon = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M44.103 18.4866L24.0002 3.8811L3.89749 18.4866L11.5761 42.1188H36.4244L44.103 18.4866ZM25.8371 1.35293C24.7418 0.557164 23.2587 0.557162 22.1634 1.35292L2.06066 15.9584C0.96539 16.7542 0.507082 18.1647 0.925439 19.4523L8.604 43.0845C9.02236 44.372 10.2222 45.2438 11.5761 45.2438H36.4244C37.7782 45.2438 38.9781 44.372 39.3965 43.0845L47.075 19.4523C47.4934 18.1647 47.0351 16.7542 45.9398 15.9584L25.8371 1.35293Z"
        fill={color}
      />
    </svg>
  )
);

export default Polygon;
