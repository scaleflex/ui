import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ImageSimilarity = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 44 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10.335 3.5H4.22288C2.99522 3.5 2 4.49522 2 5.72288V11.835H3.7783V5.72288C3.7783 5.47735 3.97735 5.2783 4.22288 5.2783H10.335V3.5Z"
        fill={color}
      />
      <path
        d="M2 40.2771V34.1649H3.7783V40.2771C3.7783 40.5226 3.97735 40.7217 4.22288 40.7217H10.335V42.5H4.22288C2.99522 42.5 2 41.5048 2 40.2771Z"
        fill={color}
      />
      <path
        d="M39.2217 40.2771V34.1649H41V40.2771C41 41.5048 40.0048 42.5 38.7771 42.5H32.6649V40.7217H38.7771C39.0226 40.7217 39.2217 40.5226 39.2217 40.2771Z"
        fill={color}
      />
      <path
        d="M41 5.72288V11.835H39.2217V5.72288C39.2217 5.47735 39.0226 5.2783 38.7771 5.2783H32.6649V3.5H38.7771C40.0048 3.5 41 4.49522 41 5.72288Z"
        fill={color}
      />
      <mask id="path-2-inside-1_1541_8579" fill="white">
        <rect x="9" y="18.4592" width="18.0408" height="18.0408" rx="1" />
      </mask>
      <rect
        x="9"
        y="18.4592"
        width="18.0408"
        height="18.0408"
        rx="1"
        stroke={color}
        strokeWidth="2.8"
        mask="url(#path-2-inside-1_1541_8579)"
      />
      <mask id="path-3-inside-2_1541_8579" fill="white">
        <rect x="16.959" y="10.5" width="18.0408" height="18.0408" rx="1" />
      </mask>
      <rect
        x="16.959"
        y="10.5"
        width="18.0408"
        height="18.0408"
        rx="1"
        stroke={color}
        strokeWidth="2.8"
        mask="url(#path-3-inside-2_1541_8579)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.6598 25.9218L19.2925 19.5544L20.2117 18.6352L26.5791 25.0025L25.6598 25.9218Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1494 21.1454C17.4032 20.8916 17.1089 20.105 18.0686 21.1454L24.0686 27.1454C25.1089 28.105 24.3224 27.8108 24.0686 28.0646C23.8148 28.3185 23.4032 28.3185 23.1494 28.0646L17.1494 22.0646C16.8955 21.8108 16.8955 21.3993 17.1494 21.1454Z"
        fill={color}
      />
    </svg>
  )
);

export default ImageSimilarity;
