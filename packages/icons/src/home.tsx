import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Home = intrinsicComponent<IconProps, SVGSVGElement>(
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
          d="M48.5562 21.875L44.0249 17.3469V6.25C44.0249 4.53125 42.6187 3.125 40.8999 3.125H37.7749C36.0562 3.125 34.6499 4.53125 34.6499 6.25V7.97813L28.3999 1.73438C27.5468 0.928125 26.7655 0 25.2749 0C23.7843 0 23.003 0.928125 22.1499 1.73438L1.99365 21.875C1.01865 22.8906 0.274902 23.6313 0.274902 25C0.274902 26.7594 1.6249 28.125 3.3999 28.125H6.5249V46.875C6.5249 48.5938 7.93115 50 9.6499 50H19.0249V34.375C19.0249 32.6562 20.4312 31.25 22.1499 31.25H28.3999C30.1187 31.25 31.5249 32.6562 31.5249 34.375V50H40.8999C42.6187 50 44.0249 48.5938 44.0249 46.875V28.125H47.1499C48.9249 28.125 50.2749 26.7594 50.2749 25C50.2749 23.6313 49.5312 22.8906 48.5562 21.875Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="50" height="50" fill="white" transform="translate(0.274902)" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Home;
