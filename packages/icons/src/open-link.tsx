import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const OpenLink = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M15.3704 7.11156C15.9227 7.11156 16.3704 7.55927 16.3704 8.11156V10.7412C16.3704 11.2935 15.9227 11.7412 15.3704 11.7412H4.79632V37.2042H30.2593V26.6301C30.2593 26.0778 30.707 25.6301 31.2593 25.6301H33.8889C34.4412 25.6301 34.8889 26.0778 34.8889 26.6301V39.519C34.8889 40.1329 34.645 40.7217 34.2109 41.1558C33.7768 41.5899 33.188 41.8338 32.5741 41.8338H2.4815C1.86757 41.8338 1.27879 41.5899 0.84468 41.1558C0.410568 40.7217 0.166687 40.1329 0.166687 39.519V9.42637C0.166687 8.81245 0.410568 8.22366 0.84468 7.78955C1.27879 7.35544 1.86757 7.11156 2.4815 7.11156H15.3704ZM41.3334 0.167114C41.6095 0.167114 41.8334 0.390972 41.8334 0.667114V17.6856C41.8334 18.2379 41.3856 18.6856 40.8334 18.6856H38.2037C37.6514 18.6856 37.2037 18.2379 37.2037 17.6856V8.06758L19.8715 25.402C19.481 25.7926 18.8478 25.7926 18.4572 25.4021L16.5983 23.5432C16.2078 23.1527 16.2078 22.5195 16.5982 22.129L33.9283 4.79674H24.3148C23.7626 4.79674 23.3148 4.34903 23.3148 3.79674V1.16711C23.3148 0.61483 23.7626 0.167114 24.3148 0.167114H41.3334Z"
        fill={color}
      />
    </svg>
  )
);

export default OpenLink;
