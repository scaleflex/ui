import React from 'react';
import type { IconProps } from './icon.props';

export const Draft = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M32.8242 17.827H36.2617L32.8242 13.1895V17.827Z" fill={color} />
    <path d="M30.3242 11.5723H14.0742V39.0723H36.5742V20.3223H30.3242V11.5723Z" fill={color} />
    <path
      d="M44.375 0H5.625C4.13417 0.00330196 2.70535 0.596994 1.65117 1.65117C0.596994 2.70535 0.00330196 4.13417 0 5.625V44.375C0.00330196 45.8658 0.596994 47.2947 1.65117 48.3488C2.70535 49.403 4.13417 49.9967 5.625 50H44.375C45.8658 49.9967 47.2947 49.403 48.3488 48.3488C49.403 47.2947 49.9967 45.8658 50 44.375V5.625C49.9967 4.13417 49.403 2.70535 48.3488 1.65117C47.2947 0.596994 45.8658 0.00330196 44.375 0ZM39.075 41.575H11.575V9.075H32.825L39.0125 17.825L39.075 41.575Z"
      fill={color}
    />
  </svg>
);

export default Draft;
