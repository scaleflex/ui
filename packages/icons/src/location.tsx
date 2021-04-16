import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Location = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M24.8594 13C21.6278 13 20.5 14.3466 20.5 17.5781C20.5 20.8251 21.6231 22 24.8594 22C28.1536 22 29 20.7759 29 17.5781C29 14.3466 28.0909 13 24.8594 13Z"
        fill={color}
      />
      <path
        d="M24.5784 0C14.8852 0 7.00024 7.88496 7.00024 17.5781C7.00024 20.8525 7.90718 24.0483 9.62241 26.8207L23.5771 49.3069C24.1557 50.2414 25.52 50.2271 26.0805 49.2869L39.679 26.5832C41.2982 23.8695 42.1565 20.7553 42.1565 17.5781C42.1565 7.88496 34.2715 0 24.5784 0ZM24.5784 26.3867C19.6619 26.3867 15.7698 22.3849 15.7698 17.5781C15.7698 12.7315 19.7318 8.76953 24.5784 8.76953C29.425 8.76953 33.387 12.7315 33.387 17.5781C33.387 22.3425 29.5472 26.3867 24.5784 26.3867Z"
        fill={color}
      />
    </svg>
  )
);

export default Location;
