import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Movable = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M6.00102 0C2.77688 0 0.154193 2.67067 0.154193 5.95338C0.154193 9.23609 2.7758 11.9066 6.00102 11.9066C9.22624 11.9066 11.8478 9.23609 11.8478 5.95338C11.8478 2.67067 9.22497 0 6.00102 0Z"
        fill={color}
      />
      <path
        d="M24.9242 0C21.7002 0 19.0773 2.67067 19.0773 5.95338C19.0773 9.23609 21.7002 11.9066 24.9242 11.9066C28.1483 11.9066 30.7715 9.23609 30.7715 5.95338C30.7715 2.67067 28.1494 0 24.9242 0Z"
        fill={color}
      />
      <path
        d="M44.1535 11.9068C47.3769 11.9068 50.0003 9.23628 50.0003 5.95357C50.0003 2.67086 47.3791 0 44.1535 0C40.9279 0 38.3067 2.67067 38.3067 5.95338C38.3067 9.23609 40.9299 11.9068 44.1535 11.9068Z"
        fill={color}
      />
      <path
        d="M5.84822 30.9833C9.07217 30.9833 11.6956 28.3133 11.6956 25.0301C11.6956 21.7466 9.07217 19.0761 5.84822 19.0761C2.62426 19.0761 0.000305176 21.7468 0.000305176 25.0301C0.000305176 28.3133 2.62426 30.9833 5.84822 30.9833Z"
        fill={color}
      />
      <path
        d="M24.7714 30.9833C27.9948 30.9833 30.6182 28.3133 30.6182 25.0301C30.6182 21.7466 27.9969 19.0761 24.7714 19.0761C21.5463 19.0761 18.9245 21.7466 18.9245 25.0301C18.9245 28.3133 21.5474 30.9833 24.7714 30.9833Z"
        fill={color}
      />
      <path
        d="M44.0023 30.9833C47.227 30.9833 49.8491 28.3133 49.8491 25.0301C49.8491 21.7466 47.227 19.0761 44.0023 19.0761C40.7776 19.0761 38.1533 21.7466 38.1533 25.0301C38.1533 28.3133 40.7767 30.9833 44.0023 30.9833Z"
        fill={color}
      />
      <path
        d="M5.982 38.0934C2.75805 38.0934 0.13409 40.7633 0.13409 44.0468C0.13409 47.329 2.75805 50 5.982 50C9.20596 50 11.8286 47.3302 11.8286 44.0468C11.8286 40.7633 9.20596 38.0934 5.982 38.0934Z"
        fill={color}
      />
      <path
        d="M24.9063 38.0934C21.6821 38.0934 19.0584 40.7633 19.0584 44.0468C19.0584 47.329 21.6812 50 24.9063 50C28.1297 50 30.7529 47.3302 30.7529 44.0468C30.7529 40.7633 28.1297 38.0934 24.9063 38.0934Z"
        fill={color}
      />
      <path
        d="M44.135 38.0934C40.9116 38.0934 38.2882 40.7633 38.2882 44.0468C38.2882 47.329 40.9116 50 44.135 50C47.3597 50 49.9819 47.3302 49.9819 44.0468C49.9819 40.7633 47.3585 38.0934 44.135 38.0934Z"
        fill={color}
      />
    </svg>
  )
);

export default Movable;