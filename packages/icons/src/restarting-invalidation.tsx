import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const RestartingInvalidation = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g clipPath="url(#clip0)">
        <path
          d="M25 50.0005C11.1925 50.0005 0 38.808 0 25.0005C0 11.1931 11.1925 0.000549316 25 0.000549316C38.8075 0.000549316 50 11.1931 50 25.0005C50 38.808 38.8075 50.0005 25 50.0005ZM37.05 37.6906C40.236 34.659 42.1638 30.5391 42.4498 26.1506C42.7357 21.7622 41.3589 17.4269 38.5933 14.0075C35.8277 10.5882 31.8761 8.33546 27.5248 7.69766C23.1735 7.05987 18.7416 8.08375 15.111 10.5656C11.4804 13.0474 8.91734 16.8052 7.93184 21.0911C6.94635 25.3771 7.61069 29.8769 9.79264 33.6953C11.9746 37.5136 15.5142 40.3704 19.7071 41.6972C23.8999 43.024 28.4386 42.7235 32.42 40.8555L29.9825 36.468C27.5147 37.5406 24.7667 37.7882 22.147 37.174C19.5272 36.5599 17.1756 35.1168 15.4416 33.0592C13.7076 31.0016 12.6838 28.4394 12.5225 25.7535C12.3611 23.0676 13.0708 20.4013 14.546 18.1509C16.0212 15.9006 18.1832 14.1863 20.7106 13.263C23.238 12.3396 25.9959 12.2565 28.5743 13.0259C31.1528 13.7953 33.4141 15.3763 35.0222 17.5337C36.6303 19.6911 37.4993 22.3098 37.5 25.0005H30L37.05 37.6906Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="50" height="50" fill="white" transform="translate(0 0.000549316)" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default RestartingInvalidation;
