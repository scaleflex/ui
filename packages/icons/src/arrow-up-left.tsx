import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ArrowUpLeft = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.09011 1.09053C1.5903 0.590334 2.27898 0.325456 2.98544 0.361553L21.615 1.31343C22.9939 1.38388 24.0546 2.55883 23.9842 3.93774C23.9137 5.31665 22.7388 6.37737 21.3598 6.30691L9.22184 5.68672L32.9099 29.3748C33.8862 30.3511 33.8862 31.934 32.9099 32.9103C31.9336 33.8866 30.3507 33.8866 29.3744 32.9103L5.6863 9.22226L6.30649 21.3603C6.37695 22.7392 5.31623 23.9141 3.93732 23.9846C2.55841 24.055 1.38346 22.9943 1.31301 21.6154L0.361131 2.98587C0.325034 2.27941 0.589913 1.59072 1.09011 1.09053Z"
        fill={color}
      />
    </svg>
  )
);

export default ArrowUpLeft;
