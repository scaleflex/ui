import React from 'react';
import type { IconProps } from './icon.props';

export const WithoutLink = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
        d="M49.833 26.1062C49.833 22.1239 46.5144 18.8053 42.5321 18.8053H32.1339L49.3905 1.54865L47.8419 0L29.2578 18.5841H28.3728C24.3905 18.5841 21.0719 21.9027 21.0719 25.885C21.0719 26.1062 21.0719 26.3275 21.2931 26.5487L16.8683 30.9735H7.57629C4.92142 30.9735 2.70905 28.7612 2.70905 26.1063V23.8939C2.70905 21.239 4.92142 19.0267 7.57629 19.0267H21.9569C22.6206 19.0267 23.0631 18.5842 23.0631 17.9205C23.0631 17.2567 22.6206 16.8142 21.9569 16.8142H7.57629C5.58513 16.8142 3.8152 17.4779 2.48776 19.0266C1.16033 20.354 0.275391 22.3452 0.275391 24.1151V26.3275C0.275391 28.3187 1.16033 30.0886 2.48776 31.416C3.8152 32.7435 5.58513 33.6284 7.57629 33.6284H14.4347L0.275391 47.7877L1.82404 49.3363L17.5321 33.6283H21.7356C25.7179 33.6283 29.0365 30.3097 29.0365 26.3274C29.0365 25.6637 28.594 25.2212 27.9303 25.2212C27.2665 25.2212 26.824 25.6637 26.824 26.3274C26.824 28.9823 24.6117 31.1947 21.9568 31.1947H20.1869L30.1426 21.2389H42.7533C45.4081 21.2389 47.6205 23.4513 47.6205 26.1062V28.3185C47.6205 30.9734 45.4081 33.1858 42.7533 33.1858H28.3727C27.709 33.1858 27.2665 33.6283 27.2665 34.292C27.2665 34.5132 27.4877 34.9557 27.709 35.1769C27.9303 35.3981 28.1515 35.6194 28.5939 35.6194H42.9745C44.9656 35.6194 46.7356 34.9557 48.063 33.4071C49.3905 31.8584 50.2754 30.0885 50.2754 28.3185L49.8329 26.1062L49.833 26.1062ZM26.3817 21.4602L23.7268 24.1151C24.3905 23.0088 25.2755 22.1239 26.3817 21.4602Z"
        fill={color}
      />
    </g>
    <defs>
      <rect width="50" height="50" fill="white" transform="translate(0.275391)" />
    </defs>
  </svg>
);

export default WithoutLink;
