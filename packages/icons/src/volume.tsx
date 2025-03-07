import React from 'react';
import type { IconProps } from './icon.props';

export const Volume = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 48 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M30.0283 0.391965C30.5639 -0.0401593 31.2961 -0.118727 31.9175 0.177689C32.5353 0.477676 32.9281 1.10265 32.9281 1.78833V48.2149C32.9281 48.9006 32.5353 49.5256 31.9175 49.822C31.671 49.9399 31.4068 50.0006 31.1425 50.0006C30.7461 50.0006 30.3497 49.8684 30.0247 49.6113L12.6576 35.7155H4.35791C2.39014 35.7155 0.786636 34.1155 0.786636 32.1442V17.8591C0.786636 15.8913 2.39014 14.2878 4.35791 14.2878H12.6576L30.0283 0.391965Z"
      fill={color}
    />
    <path
      d="M39.4422 12.3879C40.135 11.6915 41.2635 11.6808 41.9671 12.3736C45.3526 15.7127 47.2133 20.1983 47.2133 25.0016C47.2133 29.805 45.3526 34.2905 41.9671 37.6225C41.6171 37.9689 41.1635 38.1404 40.71 38.1404C40.2528 38.1404 39.7921 37.9654 39.4422 37.6118C38.7493 36.9083 38.7565 35.7762 39.4564 35.0869C42.1563 32.4227 43.642 28.8408 43.642 25.0016C43.642 21.1625 42.1563 17.5805 39.4564 14.9164C38.7565 14.22 38.7493 13.0914 39.4422 12.3879Z"
      fill={color}
    />
  </svg>
);

export default Volume;
