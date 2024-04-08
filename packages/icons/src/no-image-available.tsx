import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const NoImageAvailable = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 150 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M18 91.1367V9.86328C18 7.24738 19.0289 4.73861 20.8603 2.88889C22.6917 1.03916 25.1756 0 27.7656 0H108.234C110.824 0 113.308 1.03916 115.14 2.88889C116.971 4.73861 118 7.24738 118 9.86328V68.7561C116.082 68.2625 114.072 68 112 68C111.896 68 111.792 68.0007 111.689 68.002V13.2787C111.689 11.4477 110.968 9.69172 109.686 8.39705C108.404 7.10237 106.666 6.37503 104.853 6.37503H31.5965C29.6643 6.37503 27.8113 7.15025 26.4451 8.53014C25.0789 9.91004 24.3113 11.7816 24.3113 13.733V55.5565L52.9023 36.5533L69.9662 53.7876L81.1152 46.9181L104.608 69.1599C94.9703 72.2767 88 81.3243 88 92C88 95.1827 88.6195 98.2207 89.7446 101H27.7656C25.1756 101 22.6917 99.9608 20.8603 98.1111C19.0289 96.2614 18 93.7526 18 91.1367Z"
        fill={color}
      />
      <path
        d="M102.553 25.8275C102.553 32.2414 97.4048 37.4409 91.0544 37.4409C84.704 37.4409 79.556 32.2414 79.556 25.8275C79.556 19.4136 84.704 14.2141 91.0544 14.2141C97.4048 14.2141 102.553 19.4136 102.553 25.8275Z"
        fill={color}
      />
      <path
        d="M112 72C100.954 72 92 80.9541 92 92C92 103.046 100.954 112 112 112C123.046 112 132 103.046 132 92C132 80.9541 123.046 72 112 72ZM99.3077 99.8805C99.1069 99.557 98.9173 99.2246 98.7415 98.885C97.7348 96.953 97.1386 94.7773 97.0677 92.4679C96.8071 84.0163 103.685 76.9837 112.14 77.0611C114.572 77.0829 116.864 77.6871 118.888 78.739C119.227 78.9156 119.559 79.1052 119.882 79.3069C120.029 79.398 120.053 79.6021 119.931 79.7239L99.7255 99.9297C99.6038 100.051 99.3997 100.027 99.3077 99.8805ZM112 106.94C109.516 106.94 107.174 106.333 105.115 105.261C104.775 105.084 104.442 104.895 104.119 104.694C103.971 104.602 103.947 104.398 104.069 104.276L124.276 84.0687C124.398 83.947 124.602 83.9712 124.694 84.1187C124.895 84.4423 125.084 84.7754 125.261 85.115C126.333 87.1769 126.94 89.5163 126.94 92C126.94 100.251 120.253 106.94 112 106.94Z"
        fill={color}
      />
    </svg>
  )
);

export default NoImageAvailable;