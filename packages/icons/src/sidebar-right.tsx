import React from 'react';
import type { IconProps } from './icon.props';

export const SidebarRight = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.056 24.1676C38.056 24.6921 37.8442 25.1943 37.4685 25.5603L26.065 36.6714C25.2959 37.4208 24.0648 37.4049 23.3154 36.6357C22.566 35.8666 22.582 34.6355 23.3511 33.8861L31.3297 26.1121H2.77825C1.70436 26.1121 0.833801 25.2415 0.833801 24.1676C0.833801 23.0938 1.70436 22.2232 2.77824 22.2232H31.3297L23.3511 14.4492C22.582 13.6998 22.566 12.4687 23.3154 11.6996C24.0648 10.9304 25.2959 10.9144 26.065 11.6639L37.4685 22.775C37.8442 23.141 38.056 23.6432 38.056 24.1676Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M47.2227 0.000976562C48.2966 0.000976562 49.1671 0.871534 49.1671 1.94542V46.3899C49.1671 47.4637 48.2966 48.3343 47.2227 48.3343C46.1488 48.3343 45.2782 47.4637 45.2782 46.3899V1.94542C45.2782 0.871534 46.1488 0.000976563 47.2227 0.000976562Z"
      fill={color}
    />
  </svg>
);

export default SidebarRight;
