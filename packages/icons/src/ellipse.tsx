import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Ellipse = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.2047 46.875C37.2859 46.875 47.0797 37.0812 47.0797 25C47.0797 12.9188 37.2859 3.125 25.2047 3.125C13.1235 3.125 3.32968 12.9188 3.32968 25C3.32968 37.0812 13.1235 46.875 25.2047 46.875ZM25.2047 50C39.0118 50 50.2047 38.8071 50.2047 25C50.2047 11.1929 39.0118 0 25.2047 0C11.3976 0 0.204681 11.1929 0.204681 25C0.204681 38.8071 11.3976 50 25.2047 50Z"
        fill={color}
      />
    </svg>
  )
);

export default Ellipse;
