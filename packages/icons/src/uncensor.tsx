import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Uncensor = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <g clipPath="url(#clip0)">
      <path d="M50.2754 25.0873C50.2754 29.8867 40.0028 40.1746 25.3137 40.1746C11.0075 40.1746 0.275391 30.0398 0.275391 25.0873C0.275391 20.1348 11.0075 10 25.2371 10C40.0793 10 50.2754 20.0582 50.2754 25.0873ZM25.3137 12.7469C18.6916 12.7469 13.2898 18.2304 13.2898 25.0924C13.2898 31.9494 18.6916 37.4329 25.3137 37.4329C31.9358 37.4329 37.3376 31.9494 37.3376 25.0924C37.3376 18.307 31.9358 12.7469 25.3137 12.7469ZM25.3137 17.2399C21.0504 17.2399 17.6296 20.7424 17.6296 25.0873C17.6296 29.4322 21.0555 32.9347 25.3137 32.9347C29.5769 32.9347 32.9977 29.4271 32.9977 25.0873C32.9263 20.7424 29.5003 17.2399 25.3137 17.2399Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="50" height="50" fill="white" transform="translate(0.275391)" />
      </clipPath>
    </defs>
  </svg>
));

export default Uncensor;
