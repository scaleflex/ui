import React from 'react';
import type { IconProps } from './icon.props';

export const RadiusCorner = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M3 3H23V0.5H3C1.61929 0.5 0.5 1.61929 0.5 3V43C0.5 44.3807 1.61929 45.5 3 45.5H43C44.3807 45.5 45.5 44.3807 45.5 43V23H43V43H3V3Z"
      fill={color}
    />
    <path
      d="M45.5 7.25076H43V5.50076C43 5.15718 42.9321 4.83576 42.8113 4.54446L45.1206 3.58682C45.3651 4.17636 45.5 4.82281 45.5 5.50076V7.25076Z"
      fill={color}
    />
    <path d="M24.75 0.500763V3.00076H28.25V0.500763H24.75Z" fill={color} />
    <path d="M31.75 0.500763V3.00076H35.25V0.500763H31.75Z" fill={color} />
    <path
      d="M38.75 0.500763V3.00076H40.5C40.8436 3.00076 41.165 3.06868 41.4563 3.18948L42.414 0.880166C41.8244 0.635694 41.178 0.500763 40.5 0.500763H38.75Z"
      fill={color}
    />
    <path d="M45.5 10.7508H43V14.2508H45.5V10.7508Z" fill={color} />
    <path d="M45.5 17.7508H43V21.2508H45.5V17.7508Z" fill={color} />
  </svg>
);

export default RadiusCorner;
