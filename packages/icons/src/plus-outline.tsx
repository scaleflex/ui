import React from 'react';
import type { IconProps } from './icon.props';

export const PlusOutline = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    {...rest}
  >
    <path
      d="M22.9167 27.0838L22.9167 41.6672C22.9167 42.8177 23.8494 43.7505 25 43.7505C26.1506 43.7505 27.0833 42.8177 27.0833 41.6672L27.0833 27.0838H41.6667C42.8173 27.0838 43.75 26.1511 43.75 25.0005C43.75 23.8499 42.8173 22.9172 41.6667 22.9172L27.0833 22.9172L27.0833 8.33382C27.0833 7.18323 26.1506 6.25049 25 6.25049C23.8494 6.25049 22.9167 7.18323 22.9167 8.33382L22.9167 22.9172H8.33333C7.18274 22.9172 6.25 23.8499 6.25 25.0005C6.25 26.1511 7.18274 27.0838 8.33333 27.0838H22.9167Z"
      fill={color}
    />
  </svg>
);

export default PlusOutline;
