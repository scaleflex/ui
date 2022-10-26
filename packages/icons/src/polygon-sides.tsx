import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const PolygonSides = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.0078 29.9669H25.835L24.7803 35.9727H27.4609L28.5156 29.9669H32.2363V27.4473H28.9551L29.6875 23.2872H33.3496V20.7383H30.1416L31.2109 14.6446H28.5303L27.4609 20.7383H24.6191L25.6885 14.6446H23.0225L21.9531 20.7383H18.1006V23.2872H21.499L20.7666 27.4473H17.002V29.9669H20.3271L19.2725 35.9727H21.9531L23.0078 29.9669ZM26.2744 27.4473H23.4473L24.165 23.2872H27.0068L26.2744 27.4473Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.5448 0.821208C24.421 0.184598 25.6075 0.184597 26.4837 0.821207L48.4803 16.8026C49.3565 17.4392 49.7231 18.5677 49.3885 19.5977L40.9865 45.4562C40.6518 46.4862 39.692 47.1836 38.6089 47.1836H11.4197C10.3366 47.1836 9.37672 46.4862 9.04204 45.4562L0.640107 19.5977C0.305422 18.5677 0.672067 17.4392 1.54829 16.8026L23.5448 0.821208ZM25.0143 2.84375L47.0108 18.8252L38.6089 44.6836H11.4197L3.01775 18.8252L25.0143 2.84375Z"
        fill={color}
      />
    </svg>
  )
);

export default PolygonSides;
