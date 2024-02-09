import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Hub = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
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
        d="M42.5 35C41.25 35 40.25 35.25 39.25 35.75L33.5 30C34.5 28.5 35 26.75 35 25C35 23.25 34.5 21.5 33.5 20L39.25 14.25C40.25 14.75 41.25 15 42.5 15C46.75 15 50 11.75 50 7.5C50 3.25 46.75 0 42.5 0C38.25 0 35 3.25 35 7.5C35 8.75 35.25 9.75 35.75 10.75L30 16.5C27 14.75 23 14.75 20 16.5L14.25 10.75C14.75 9.75 15 8.75 15 7.5C15 3.25 11.75 0 7.5 0C3.25 0 0 3.25 0 7.5C0 11.75 3.25 15 7.5 15C8.75 15 9.75 14.75 10.75 14.25L16.5 20C15.5 21.5 15 23.25 15 25C15 26.75 15.5 28.5 16.5 30L10.75 35.75C9.75 35.25 8.75 35 7.5 35C3.25 35 0 38.25 0 42.5C0 46.75 3.25 50 7.5 50C11.75 50 15 46.75 15 42.5C15 41.25 14.75 40.25 14.25 39.25L20 33.5C21.5 34.5 23.25 35 25 35C26.75 35 28.5 34.5 30 33.5L35.75 39.25C35.25 40.25 35 41.25 35 42.5C35 46.75 38.25 50 42.5 50C46.75 50 50 46.75 50 42.5C50 38.25 46.75 35 42.5 35ZM42.5 5C44 5 45 6 45 7.5C45 9 44 10 42.5 10C41 10 40 8.75 40 7.5C40 6 41 5 42.5 5ZM5 7.5C5 6 6 5 7.5 5C9 5 10 6 10 7.5C10 9 9 10 7.5 10C6 10 5 9 5 7.5ZM7.5 45C6 45 5 44 5 42.5C5 41 6 40 7.5 40C9 40 10 41.25 10 42.5C10 44 9 45 7.5 45ZM21.5 28.5C19.5 26.5 19.5 23.25 21.5 21.5C23.5 19.5 26.75 19.5 28.5 21.5C30.25 23.25 30.5 26.5 28.5 28.5C26.75 30.5 23.5 30.5 21.5 28.5ZM42.5 45C41 45 40 44 40 42.5C40 41.25 41 40 42.5 40C44 40 45 41 45 42.5C45 44 44 45 42.5 45Z"
        fill={color}
      />
      <path
        d="M5 7.5C5 6 6 5 7.5 5C9 5 10 6 10 7.5C10 9 9 10 7.5 10C6 10 5 9 5 7.5Z"
        fill={color} 
      />
      <path
        d="M21.5 28.5C19.5 26.5 19.5 23.25 21.5 21.5C23.5 19.5 26.75 19.5 28.5 21.5C30.25 23.25 30.5 26.5 28.5 28.5C26.75 30.5 23.5 30.5 21.5 28.5Z"
        fill={color}
      />
      <path
        d="M42.5 5C44 5 45 6 45 7.5C45 9 44 10 42.5 10C41 10 40 8.75 40 7.5C40 6 41 5 42.5 5Z"
        fill={color}
      />
      <path
        d="M42.5 45C41 45 40 44 40 42.5C40 41.25 41 40 42.5 40C44 40 45 41 45 42.5C45 44 44 45 42.5 45Z"
        fill={color}
      />
      <path
        d="M7.5 45C6 45 5 44 5 42.5C5 41 6 40 7.5 40C9 40 10 41.25 10 42.5C10 44 9 45 7.5 45Z"
        fill={color}
      />
    </svg>
  )
);

export default Hub;