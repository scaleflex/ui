import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Duplicate = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="-6 -3 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.312012 34.847V3.39883C0.312012 1.67294 1.71112 0.273834 3.43701 0.273834H26.807C28.5329 0.273834 29.932 1.67294 29.932 3.39883V34.847C29.932 36.5729 28.5329 37.972 26.807 37.972H3.43701C1.71112 37.972 0.312012 36.5729 0.312012 34.847ZM3.43701 34.847V3.39883L26.807 3.39883L26.807 34.847L3.43701 34.847Z"
        fill={color}
      />
      <path
        d="M35.6874 12.5434C35.6874 11.6805 34.9878 10.9809 34.1249 10.9809C33.2619 10.9809 32.5624 11.6805 32.5624 12.5434V40.6009H9.89033C9.02739 40.6009 8.32783 41.3005 8.32783 42.1634C8.32783 43.0263 9.02739 43.7259 9.89033 43.7259H34.1249C34.9878 43.7259 35.6874 43.0263 35.6874 42.1634V12.5434Z"
        fill={color}
      />
    </svg>
  )
);

export default Duplicate;
