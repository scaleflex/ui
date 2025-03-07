import React from 'react';
import type { IconProps } from './icon.props';

export const NoUrlsFlush = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25 50.0005C38.8071 50.0005 50 38.8077 50 25.0005C50 11.1934 38.8071 0.000549316 25 0.000549316C11.1929 0.000549316 0 11.1934 0 25.0005C0 38.8077 11.1929 50.0005 25 50.0005ZM14.5 22.5005C13.3954 22.5005 12.5 23.396 12.5 24.5005V25.5005C12.5 26.6051 13.3954 27.5005 14.5 27.5005H35.5C36.6046 27.5005 37.5 26.6051 37.5 25.5005V24.5005C37.5 23.396 36.6046 22.5005 35.5 22.5005H14.5Z"
      fill={color}
    />
  </svg>
);

export default NoUrlsFlush;
