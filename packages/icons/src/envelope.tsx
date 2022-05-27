import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Envelope = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_4240_882)">
        <path
          d="M17.1426 14.0377L15.0488 16.1385C14.1997 16.9906 12.7058 17.0089 11.8383 16.1385L9.74443 14.0377L2.22412 21.5824C2.50405 21.7118 2.8127 21.7891 3.14082 21.7891H23.7463C24.0744 21.7891 24.383 21.7119 24.6628 21.5824L17.1426 14.0377Z"
          fill={color}
        />
        <path
          d="M23.7462 4.21094H3.14072C2.8126 4.21094 2.50396 4.28818 2.22412 4.41763L10.2601 12.4803C10.2606 12.4808 10.2613 12.4809 10.2618 12.4814C10.2624 12.482 10.2625 12.4827 10.2625 12.4827L12.8754 15.1043C13.1529 15.3818 13.7341 15.3818 14.0116 15.1043L16.624 12.4832C16.624 12.4832 16.6247 12.482 16.6252 12.4814C16.6252 12.4814 16.6264 12.4808 16.6269 12.4803L24.6627 4.41758C24.3829 4.28809 24.0743 4.21094 23.7462 4.21094Z"
          fill={color}
        />
        <path
          d="M1.17705 5.44199C1.03223 5.73486 0.943359 6.05995 0.943359 6.4082V19.5918C0.943359 19.94 1.03213 20.2651 1.177 20.558L8.71035 13.0002L1.17705 5.44199Z"
          fill={color}
        />
        <path
          d="M25.7095 5.44189L18.1763 13.0002L25.7095 20.5581C25.8543 20.2652 25.9432 19.9401 25.9432 19.5918V6.4082C25.9432 6.05986 25.8543 5.73477 25.7095 5.44189Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_4240_882">
          <rect width="25" height="25" fill="white" transform="translate(0.943359 0.5)" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Envelope;
