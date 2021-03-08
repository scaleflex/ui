import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const GoBack = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M0.795492 22.366C0.482992 22.6785 0.274658 23.0952 0.274658 23.4077C0.274658 23.7202 0.482992 24.241 0.795492 24.4493L22.7747 42.6785C23.0872 42.991 23.8163 42.991 24.3372 42.8868C24.858 42.7827 25.1705 42.1577 25.1705 41.6368V32.1577C34.1288 32.1577 40.1705 32.8868 47.6705 45.9077C47.8788 46.4285 48.3997 46.6368 48.9205 46.6368C49.1288 46.6368 49.1288 46.6368 49.233 46.6368C49.9622 46.4285 50.2747 45.9077 50.2747 45.2827V44.241C50.2747 39.4493 50.2747 32.2618 47.0455 26.2202C43.2955 19.1368 35.8997 15.3868 25.2747 15.0743V5.38684C25.2747 4.86601 24.9622 4.34518 24.4413 4.13684C23.9205 3.92851 23.3997 3.92851 23.0872 4.34518L0.795492 22.366Z"
        fill={color}
      />
    </svg>
  )
);

export default GoBack;
