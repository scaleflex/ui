import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const RotationRight = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g clipPath="url(#clip0)">
        <path
          d="M50.2753 26.8064H24.4689L36.5656 14.7096C32.735 11.0806 28.7027 9.66933 23.6624 9.66933C13.3802 9.66933 6.32372 15.3145 3.50118 25.5967L0.275391 24.7903C3.50118 13.0968 11.9689 6.44355 23.6625 6.44355C29.7109 6.44355 34.348 8.25806 38.9851 12.2903L50.2754 1L50.2753 26.8064Z"
          fill={color}
        />
        <path
          d="M34.5495 46.3628L33.1382 44.3467C33.743 43.9435 34.3479 43.3386 34.9527 42.9355L36.5656 44.75C35.9608 45.1532 35.3559 45.758 34.5495 46.3628Z"
          fill={color}
        />
        <path
          d="M27.2913 49.387C26.6865 49.5886 26.0817 49.5886 25.4768 49.7903L25.0736 47.3709C26.4848 47.1693 27.8962 46.7661 29.3074 46.3628L30.1139 48.5806C29.1058 48.9838 28.2994 49.1854 27.2913 49.387ZM20.4365 49.9919C18.8235 49.7903 17.2107 49.5886 15.5978 48.9838L16.4042 46.766C17.8155 47.1693 19.2268 47.5724 20.6381 47.5724L20.4365 49.9919ZM11.1623 46.9677C9.75104 46.1612 8.33971 45.1532 7.13003 43.9435L8.74296 42.129C9.75104 43.137 10.9607 43.9435 12.372 44.7499L11.1623 46.9677ZM3.90425 40.3144C2.89617 38.9032 2.08974 37.2903 1.6865 35.879L3.90425 35.0726C4.50909 36.4838 5.11393 37.6935 5.92036 38.9032L3.90425 40.3144Z"
          fill={color}
        />
        <path
          d="M3.2996 30.0322L0.880241 30.2338C0.678647 29.2257 0.678647 28.4193 0.678647 27.4112H3.09801C3.09801 28.4193 3.2996 29.2258 3.2996 30.0322Z"
          fill={color}
        />
      </g>
      <defs>
        <rect width="50" height="50" fill="white" transform="translate(0.275391)" />
      </defs>
    </svg>
  )
);

export default RotationRight;
