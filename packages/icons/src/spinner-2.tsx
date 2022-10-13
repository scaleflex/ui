import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Spinner2 = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M45.8626 11.22C44.0027 8.4098 41.5902 5.99728 38.78 4.13736L37.4002 6.22212C33.846 3.86982 29.5868 2.5 25 2.5C20.4132 2.5 16.154 3.86982 12.5998 6.22212L11.22 4.13736C8.4098 5.99728 5.99728 8.4098 4.13736 11.22L6.22212 12.5998C3.86982 16.154 2.5 20.4132 2.5 25C2.5 29.5868 3.86982 33.846 6.22212 37.4002L4.13736 38.78C5.99728 41.5902 8.4098 44.0027 11.22 45.8626L12.5998 43.7779C16.154 46.1302 20.4132 47.5 25 47.5C29.5868 47.5 33.846 46.1302 37.4002 43.7779L38.78 45.8626C41.5902 44.0027 44.0027 41.5902 45.8626 38.78L43.7779 37.4002C46.1302 33.846 47.5 29.5868 47.5 25C47.5 20.4132 46.1302 16.154 43.7779 12.5998L45.8626 11.22Z"
        stroke={color}
        strokeWidth="5"
        strokeDasharray="329.87 113.96"
      />
    </svg>
  )
);

export default Spinner2;
