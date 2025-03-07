import React from 'react';
import type { IconProps } from './icon.props';

export const Insights = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g clipPath="url(#clip0_2392_77334)">
      <path
        d="M12.5 24H1.7887C0.805439 24 0.0104603 24.6808 0 25.5317V48.463C0 49.314 0.805439 49.9948 1.7887 49.9948H12.5C13.4937 49.9948 14.2887 49.305 14.2887 48.463V25.5317C14.2887 24.6808 13.4833 24 12.5 24Z"
        fill={color}
      />
      <path
        d="M30.3557 0.00523376H19.6444C18.6611 0.00523376 17.8557 0.800213 17.8557 1.78348V48.2061C17.8557 49.1998 18.6611 49.9948 19.6444 49.9948H30.3557C31.3494 49.9948 32.1444 49.1893 32.1444 48.2061V1.79394C32.1444 0.800213 31.3389 0.00523376 30.3557 0.00523376Z"
        fill={color}
      />
      <path
        d="M48.2113 14.2835H37.5C36.5063 14.2835 35.7113 15.0785 35.7113 16.0722V48.2061C35.7113 49.1998 36.5167 49.9948 37.5 49.9948H48.2113C49.205 49.9948 50 49.1893 50 48.2061V16.0722C50 15.0785 49.1946 14.2835 48.2113 14.2835Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_2392_77334">
        <rect width="50" height="50" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Insights;
