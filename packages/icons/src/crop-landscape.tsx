import React from 'react';
import type { IconProps } from './icon.props';

export const CropLandscape = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 53 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.11841 3.93799V32.063H47.8684V3.93799H4.11841ZM3.49341 0.812988C2.1127 0.812988 0.993408 1.91229 0.993408 3.26835V32.7326C0.993408 34.0887 2.1127 35.188 3.49341 35.188H48.4934C49.8741 35.188 50.9934 34.0887 50.9934 32.7326V3.26835C50.9934 1.91229 49.8741 0.812988 48.4934 0.812988H3.49341Z"
      fill={color}
    />
  </svg>
);

export default CropLandscape;
