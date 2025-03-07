import React from 'react';
import type { IconProps } from './icon.props';

export const ArrowLeftOutline = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 28 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.907 0.71085C25.7493 -0.292553 23.9445 -0.224769 22.8758 0.862251L0.931376 23.1837C-0.0773525 24.2097 -0.0773525 25.7913 0.931376 26.8173L22.8758 49.1388C23.9445 50.2258 25.7493 50.2936 26.907 49.2902C28.0647 48.2868 28.1369 46.5921 27.0683 45.5051L6.90997 25.0005L27.0683 4.49589C28.1369 3.40888 28.0647 1.71425 26.907 0.71085Z"
      fill={color}
    />
  </svg>
);

export default ArrowLeftOutline;
