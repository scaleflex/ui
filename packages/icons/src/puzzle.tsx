import React from 'react';
import type { IconProps } from './icon.props';

export const Puzzle = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M44.0477 23.8095H40.4762V14.2857C40.4762 11.6548 38.3453 9.5238 35.7143 9.5238H26.1905V5.95237C26.1905 2.66666 23.5238 3.05176e-05 20.2381 3.05176e-05C16.9523 3.05176e-05 14.2857 2.66666 14.2857 5.95237V9.5238H4.76194C2.13103 9.5238 0.0238839 11.6547 0.0238839 14.2857L0.011942 23.3334H3.57143C7.11908 23.3334 10 26.2143 10 29.762C10 33.3096 7.11908 36.1905 3.57143 36.1905H0.011942L0 45.2381C0 47.8691 2.13092 50 4.76194 50H13.8096V46.4286C13.8096 42.8809 16.6905 40 20.2382 40C23.7858 40 26.6667 42.8809 26.6667 46.4286V50H35.7143C38.3452 50 40.4762 47.8691 40.4762 45.2381V35.7143H44.0477C47.3334 35.7143 50 33.0477 50 29.762C50 26.4763 47.3334 23.8095 44.0477 23.8095Z"
      fill={color}
    />
  </svg>
);

export default Puzzle;
