import React from 'react';
import type { IconProps } from './icon.props';

export const Languages = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M33.9772 14.9976C32.2188 6.83036 28.4685 1.66333 24.9999 1.66333C21.5314 1.66333 17.7811 6.83036 16.0226 14.9976H33.9772Z"
      fill={color}
    />
    <path
      d="M14.9993 24.9984C14.9989 27.2282 15.1475 29.4556 15.4443 31.6656H34.5556C34.8524 29.4556 35.0011 27.2282 35.0007 24.9984C35.0011 22.7686 34.8524 20.5413 34.5556 18.3313H15.4443C15.1475 20.5413 14.9989 22.7686 14.9993 24.9984Z"
      fill={color}
    />
    <path
      d="M16.0226 34.999C17.7811 43.1663 21.5314 48.3333 24.9999 48.3333C28.4685 48.3333 32.2188 43.1663 33.9772 34.999H16.0226Z"
      fill={color}
    />
    <path
      d="M37.3908 14.9978H47.8916C46.3138 11.4071 43.9165 8.23623 40.892 5.73937C37.8674 3.24252 34.2998 1.48922 30.4753 0.620117C33.6372 3.40198 36.1174 8.54568 37.3908 14.9978Z"
      fill={color}
    />
    <path
      d="M49.09 18.3313H37.9225C38.1975 20.543 38.335 22.7697 38.3342 24.9984C38.3344 27.2272 38.1964 29.4539 37.9208 31.6656H49.0883C50.3038 27.3039 50.3038 22.693 49.0883 18.3313H49.09Z"
      fill={color}
    />
    <path
      d="M30.4753 49.3767C34.3004 48.5081 37.8687 46.755 40.8939 44.2581C43.919 41.7612 46.3168 38.5901 47.8949 34.999H37.3942C36.1174 41.4511 33.6372 46.5948 30.4753 49.3767Z"
      fill={color}
    />
    <path
      d="M12.6091 34.999H2.10834C3.68643 38.5901 6.08424 41.7612 9.10939 44.2581C12.1345 46.755 15.7028 48.5081 19.5279 49.3767C16.3627 46.5948 13.8825 41.4511 12.6091 34.999Z"
      fill={color}
    />
    <path
      d="M19.5245 0.620117C15.6994 1.48875 12.1312 3.24183 9.10603 5.73871C6.08089 8.23559 3.68308 11.4068 2.10498 14.9978H12.6057C13.8825 8.54568 16.3627 3.40198 19.5245 0.620117Z"
      fill={color}
    />
    <path
      d="M11.6657 24.9984C11.6655 22.7696 11.8035 20.543 12.079 18.3313H0.911589C-0.303944 22.693 -0.303944 27.3039 0.911589 31.6656H12.079C11.8035 29.4539 11.6655 27.2272 11.6657 24.9984Z"
      fill={color}
    />
  </svg>
);

export default Languages;
