import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Info = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M25.0001 0C11.1928 0 0.00012207 11.1931 0.00012207 25C0.00012207 38.8077 11.1928 50 25.0001 50C38.8074 50 50.0001 38.8077 50.0001 25C50.0001 11.1931 38.8074 0 25.0001 0ZM25.2501 10.5C26.9761 10.5 28.3751 11.8992 28.3751 13.625C28.3751 15.3516 26.9761 16.75 25.2501 16.75C23.5241 16.75 22.1251 15.3516 22.1251 13.625C22.1251 11.8992 23.5241 10.5 25.2501 10.5ZM29.9376 39H20.5626C19.6997 39 19.0001 38.3012 19.0001 37.4375C19.0001 36.5746 19.6997 35.875 20.5626 35.875H22.1251V23H20.5626C19.6997 23 19.0001 22.3012 19.0001 21.4375C19.0001 20.5746 19.6997 19.875 20.5626 19.875H26.8126C27.6755 19.875 28.3751 20.5746 28.3751 21.4375V35.875H29.9376C30.8005 35.875 31.5001 36.5746 31.5001 37.4375C31.5001 38.3012 30.8005 39 29.9376 39Z"
        fill={color}
      />
    </svg>
  )
);

export default Info;
