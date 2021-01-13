import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Text = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M39.4229 8.89453L39.7891 16.6582H38.8613C38.6823 15.291 38.4382 14.3145 38.1289 13.7285C37.6243 12.7845 36.9489 12.0928 36.1025 11.6533C35.2725 11.1976 34.1738 10.9697 32.8066 10.9697H28.1436V36.2627C28.1436 38.2972 28.3633 39.5667 28.8027 40.0713C29.4212 40.7549 30.3734 41.0967 31.6592 41.0967H32.8066V42H18.7686V41.0967H19.9404C21.3402 41.0967 22.333 40.6735 22.9189 39.8271C23.277 39.3063 23.4561 38.1182 23.4561 36.2627V10.9697H19.4766C17.9303 10.9697 16.8317 11.0837 16.1807 11.3115C15.3343 11.6208 14.61 12.2148 14.0078 13.0938C13.4056 13.9727 13.0475 15.1608 12.9336 16.6582H12.0059L12.3965 8.89453H39.4229Z" fill={color} />
  </svg>
));

export default Text;
