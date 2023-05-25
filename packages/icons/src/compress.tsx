import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Compress = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g clipPath="url(#clip0_21732_13454)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.6667 0.000488281C18.2008 0.000488281 19.4444 1.24415 19.4444 2.77827V16.6672C19.4444 18.2013 18.2008 19.4449 16.6667 19.4449H2.77778C1.24367 19.4449 0 18.2013 0 16.6672C0 15.133 1.24367 13.8894 2.77778 13.8894H13.8889V2.77827C13.8889 1.24415 15.1326 0.000488281 16.6667 0.000488281ZM33.3333 0.000488281C34.8675 0.000488281 36.1111 1.24415 36.1111 2.77827V13.8894H47.2222C48.7564 13.8894 50 15.133 50 16.6672C50 18.2013 48.7564 19.4449 47.2222 19.4449H33.3333C31.7992 19.4449 30.5556 18.2013 30.5556 16.6672V2.77827C30.5556 1.24415 31.7992 0.000488281 33.3333 0.000488281ZM0 33.3338C0 31.7997 1.24367 30.556 2.77778 30.556H16.6667C18.2008 30.556 19.4444 31.7997 19.4444 33.3338V47.2227C19.4444 48.7569 18.2008 50.0005 16.6667 50.0005C15.1326 50.0005 13.8889 48.7569 13.8889 47.2227V36.1116H2.77778C1.24367 36.1116 0 34.868 0 33.3338ZM30.5556 33.3338C30.5556 31.7997 31.7992 30.556 33.3333 30.556H47.2222C48.7564 30.556 50 31.7997 50 33.3338C50 34.868 48.7564 36.1116 47.2222 36.1116H36.1111V47.2227C36.1111 48.7569 34.8675 50.0005 33.3333 50.0005C31.7992 50.0005 30.5556 48.7569 30.5556 47.2227V33.3338Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_21732_13454">
          <rect width="50" height="50" fill="white" transform="translate(0 0.000488281)" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Compress;