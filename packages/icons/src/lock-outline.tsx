import React from 'react';
import type { IconProps } from './icon.props';

export const LockOutline = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M40.5 20H38V12.5C38 5.6 32.4 0 25.5 0C18.6 0 13 5.6 13 12.5V20H10.5C9.1 20 8 21.1 8 22.5V47.5C8 48.9 9.1 50 10.5 50H40.5C41.9 50 43 48.9 43 47.5V22.5C43 21.1 41.9 20 40.5 20ZM15.5 12.5C15.5 7 20 2.5 25.5 2.5C31 2.5 35.5 7 35.5 12.5V20H15.5V12.5ZM40.5 47.5H10.5V22.5H40.5V47.5Z"
      fill={color}
    />
    <path
      d="M24.3 37.3V41.3H26.8V37.3C28.3 36.8 29.3 35.4 29.3 33.8C29.3 31.7 27.6 30 25.5 30C23.4 30 21.7 31.7 21.7 33.8C21.8 35.4 22.8 36.8 24.3 37.3ZM25.5 32.5C26.2 32.5 26.8 33.1 26.8 33.8C26.8 34.5 26.2 35.1 25.5 35.1C24.8 35.1 24.2 34.5 24.2 33.8C24.3 33.1 24.8 32.5 25.5 32.5Z"
      fill={color}
    />
  </svg>
);

export default LockOutline;
