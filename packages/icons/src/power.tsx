import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Power = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M25.0001 3.05176e-05C11.215 3.05176e-05 6.10352e-05 11.215 6.10352e-05 25C6.10352e-05 38.7851 11.215 50 25.0001 50C38.7851 50 50.0001 38.7851 50.0001 25C50.0001 11.215 38.7851 3.05176e-05 25.0001 3.05176e-05ZM23.5352 8.39847C23.5352 7.58948 24.1911 6.93362 25.0001 6.93362C25.809 6.93362 26.4649 7.58948 26.4649 8.39847V20.1172C26.4649 20.9262 25.809 21.5821 25.0001 21.5821C24.1911 21.5821 23.5352 20.9262 23.5352 20.1172V8.39847ZM25.0001 41.1133C16.1152 41.1133 8.88678 33.8849 8.88678 25C8.88678 18.5992 12.6813 12.8041 18.5539 10.2365C19.2951 9.91224 20.1588 10.2505 20.4829 10.9917C20.807 11.7329 20.4688 12.5966 19.7276 12.9207C14.9217 15.0221 11.8165 19.7634 11.8165 25C11.8165 32.2695 17.7306 38.1836 25.0001 38.1836C32.2695 38.1836 38.1837 32.2695 38.1837 25C38.1837 19.7634 35.0784 15.0221 30.2726 12.9208C29.5314 12.5967 29.1932 11.733 29.5173 10.9918C29.8414 10.2505 30.705 9.91214 31.4464 10.2366C37.3188 12.8041 41.1133 18.5992 41.1133 25C41.1133 33.8849 33.8849 41.1133 25.0001 41.1133Z"
        fill={color}
      />
    </svg>
  )
);

export default Power;