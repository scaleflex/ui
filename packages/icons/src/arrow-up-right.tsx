import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ArrowUpRight = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.9099 1.09062C33.4101 1.59082 33.675 2.2795 33.6389 2.98596L32.687 21.6155C32.6165 22.9944 31.4416 24.0551 30.0627 23.9847C28.6838 23.9142 27.6231 22.7393 27.6935 21.3604L28.3137 9.22235L4.62563 32.9104C3.64931 33.8867 2.0664 33.8867 1.09009 32.9104C0.11378 31.9341 0.113778 30.3512 1.09009 29.3749L24.7782 5.68682L12.6402 6.30701C11.2612 6.37746 10.0863 5.31675 10.0158 3.93784C9.94539 2.55892 11.0061 1.38398 12.385 1.31352L31.0146 0.361648C31.721 0.325552 32.4097 0.59043 32.9099 1.09062Z"
        fill={color}
      />
    </svg>
  )
);

export default ArrowUpRight;
