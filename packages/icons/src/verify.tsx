import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Verify = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M46.0278 12.87C45.968 11.5546 45.968 10.299 45.968 9.04335C45.968 8.02691 45.1907 7.24963 44.1743 7.24963C36.7004 7.24963 31.0203 5.09716 26.2969 0.493274C25.5794 -0.164425 24.5031 -0.164425 23.7856 0.493274C19.0622 5.09716 13.3821 7.24963 5.90822 7.24963C4.89178 7.24963 4.1145 8.02691 4.1145 9.04335C4.1145 10.299 4.1145 11.5546 4.05471 12.87C3.81554 25.426 3.4568 42.6457 24.4433 49.8804L25.0413 50L25.6392 49.8804C46.5659 42.6457 46.267 25.4858 46.0278 12.87ZM24.8908 30.2691C24.5321 30.568 24.1136 30.7474 23.6352 30.7474H23.5754C23.0971 30.7474 22.6188 30.5082 22.3198 30.1495L19.5396 27.0703L16.7593 23.991L19.4499 21.5994L23.8146 26.4425L33.5007 17.2347L35.9521 19.8655L24.8908 30.2691Z"
        fill={color}
      />
    </svg>
  )
);

export default Verify;
