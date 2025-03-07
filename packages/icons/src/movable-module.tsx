import React from 'react';
import type { IconProps } from './icon.props';

export const MovableModule = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size * (22 / 52)}
    height={size}
    viewBox="0 0 22 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M0.553067 3.04878C0.553067 4.73258 1.91805 6.09756 3.60185 6.09756C5.28564 6.09756 6.65063 4.73258 6.65063 3.04878C6.65063 1.36499 5.28564 7.3601e-08 3.60185 0C1.91805 -7.3601e-08 0.553067 1.36499 0.553067 3.04878Z"
      fill={color}
    />
    <path
      d="M0.540636 10.3659C0.540636 12.0496 1.90562 13.4146 3.58942 13.4146C5.27321 13.4146 6.6382 12.0496 6.6382 10.3659C6.6382 8.68206 5.27321 7.31707 3.58942 7.31707C1.90562 7.31707 0.540636 8.68206 0.540636 10.3659Z"
      fill={color}
    />
    <path
      d="M0.528205 17.6829C0.528205 19.3667 1.89319 20.7317 3.57698 20.7317C5.26078 20.7317 6.62577 19.3667 6.62577 17.6829C6.62577 15.9991 5.26078 14.6341 3.57698 14.6341C1.89319 14.6341 0.528205 15.9991 0.528205 17.6829Z"
      fill={color}
    />
    <path
      d="M0.515775 25C0.515775 26.6838 1.88076 28.0488 3.56455 28.0488C5.24835 28.0488 6.61334 26.6838 6.61334 25C6.61334 23.3162 5.24835 21.9512 3.56455 21.9512C1.88076 21.9512 0.515775 23.3162 0.515775 25Z"
      fill={color}
    />
    <path
      d="M0.503346 32.3171C0.503346 34.0009 1.86833 35.3659 3.55213 35.3659C5.23592 35.3659 6.60091 34.0009 6.60091 32.3171C6.60091 30.6333 5.23592 29.2683 3.55213 29.2683C1.86833 29.2683 0.503346 30.6333 0.503346 32.3171Z"
      fill={color}
    />
    <path
      d="M0.490916 39.6341C0.490916 41.3179 1.8559 42.6829 3.5397 42.6829C5.22349 42.6829 6.58848 41.3179 6.58848 39.6341C6.58848 37.9504 5.22349 36.5854 3.5397 36.5854C1.8559 36.5854 0.490916 37.9504 0.490916 39.6341Z"
      fill={color}
    />
    <path
      d="M0.478485 46.9512C0.478485 48.635 1.84347 50 3.52726 50C5.21106 50 6.57605 48.635 6.57605 46.9512C6.57605 45.2674 5.21106 43.9024 3.52726 43.9024C1.84347 43.9024 0.478485 45.2674 0.478485 46.9512Z"
      fill={color}
    />
    <path
      d="M7.85771 3.04878C7.85771 4.73258 9.22269 6.09756 10.9065 6.09756C12.5903 6.09756 13.9553 4.73258 13.9553 3.04878C13.9553 1.36499 12.5903 3.40134e-07 10.9065 2.66533e-07C9.22269 1.92932e-07 7.85771 1.36499 7.85771 3.04878Z"
      fill={color}
    />
    <path
      d="M7.84528 10.3659C7.84528 12.0496 9.21026 13.4146 10.8941 13.4146C12.5779 13.4146 13.9428 12.0496 13.9428 10.3659C13.9428 8.68206 12.5779 7.31707 10.8941 7.31707C9.21026 7.31707 7.84528 8.68206 7.84528 10.3659Z"
      fill={color}
    />
    <path
      d="M7.83285 17.6829C7.83285 19.3667 9.19783 20.7317 10.8816 20.7317C12.5654 20.7317 13.9304 19.3667 13.9304 17.6829C13.9304 15.9991 12.5654 14.6341 10.8816 14.6341C9.19783 14.6341 7.83285 15.9991 7.83285 17.6829Z"
      fill={color}
    />
    <path
      d="M7.82042 25C7.82042 26.6838 9.1854 28.0488 10.8692 28.0488C12.553 28.0488 13.918 26.6838 13.918 25C13.918 23.3162 12.553 21.9512 10.8692 21.9512C9.1854 21.9512 7.82042 23.3162 7.82042 25Z"
      fill={color}
    />
    <path
      d="M7.80799 32.3171C7.80799 34.0009 9.17297 35.3659 10.8568 35.3659C12.5406 35.3659 13.9056 34.0009 13.9056 32.3171C13.9056 30.6333 12.5406 29.2683 10.8568 29.2683C9.17297 29.2683 7.80799 30.6333 7.80799 32.3171Z"
      fill={color}
    />
    <path
      d="M7.79556 39.6341C7.79556 41.3179 9.16054 42.6829 10.8443 42.6829C12.5281 42.6829 13.8931 41.3179 13.8931 39.6341C13.8931 37.9504 12.5281 36.5854 10.8443 36.5854C9.16054 36.5854 7.79556 37.9504 7.79556 39.6341Z"
      fill={color}
    />
    <path
      d="M7.78313 46.9512C7.78313 48.635 9.14811 50 10.8319 50C12.5157 50 13.8807 48.635 13.8807 46.9512C13.8807 45.2674 12.5157 43.9024 10.8319 43.9024C9.14811 43.9024 7.78313 45.2674 7.78313 46.9512Z"
      fill={color}
    />
    <path
      d="M15.1748 3.04878C15.1748 4.73258 16.5398 6.09756 18.2236 6.09756C19.9074 6.09756 21.2723 4.73258 21.2723 3.04878C21.2723 1.36499 19.9074 3.40134e-07 18.2236 2.66533e-07C16.5398 1.92932e-07 15.1748 1.36499 15.1748 3.04878Z"
      fill={color}
    />
    <path
      d="M15.1624 10.3659C15.1624 12.0496 16.5273 13.4146 18.2111 13.4146C19.8949 13.4146 21.2599 12.0496 21.2599 10.3659C21.2599 8.68206 19.8949 7.31707 18.2111 7.31707C16.5273 7.31707 15.1624 8.68206 15.1624 10.3659Z"
      fill={color}
    />
    <path
      d="M15.1499 17.6829C15.1499 19.3667 16.5149 20.7317 18.1987 20.7317C19.8825 20.7317 21.2475 19.3667 21.2475 17.6829C21.2475 15.9991 19.8825 14.6341 18.1987 14.6341C16.5149 14.6341 15.1499 15.9991 15.1499 17.6829Z"
      fill={color}
    />
    <path
      d="M15.1375 25C15.1375 26.6838 16.5025 28.0488 18.1863 28.0488C19.8701 28.0488 21.2351 26.6838 21.2351 25C21.2351 23.3162 19.8701 21.9512 18.1863 21.9512C16.5025 21.9512 15.1375 23.3162 15.1375 25Z"
      fill={color}
    />
    <path
      d="M15.1251 32.3171C15.1251 34.0009 16.49 35.3659 18.1738 35.3659C19.8576 35.3659 21.2226 34.0009 21.2226 32.3171C21.2226 30.6333 19.8576 29.2683 18.1738 29.2683C16.49 29.2683 15.1251 30.6333 15.1251 32.3171Z"
      fill={color}
    />
    <path
      d="M15.1126 39.6341C15.1126 41.3179 16.4776 42.6829 18.1614 42.6829C19.8452 42.6829 21.2102 41.3179 21.2102 39.6341C21.2102 37.9504 19.8452 36.5854 18.1614 36.5854C16.4776 36.5854 15.1126 37.9504 15.1126 39.6341Z"
      fill={color}
    />
    <path
      d="M15.1002 46.9512C15.1002 48.635 16.4652 50 18.149 50C19.8328 50 21.1978 48.635 21.1978 46.9512C21.1978 45.2674 19.8328 43.9024 18.149 43.9024C16.4652 43.9024 15.1002 45.2674 15.1002 46.9512Z"
      fill={color}
    />
  </svg>
);

export default MovableModule;
