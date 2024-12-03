import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Success = intrinsicComponent<IconProps, SVGSVGElement>(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM38.0381 19.0686C38.9264 18.1139 38.8725 16.6199 37.9177 15.7317C36.963 14.8435 35.469 14.8974 34.5808 15.8521L22.2804 29.0733L15.4192 21.6984C14.531 20.7437 13.037 20.6898 12.0823 21.578C11.1275 22.4662 11.0736 23.9602 11.9618 24.915L20.5517 34.1479C20.9984 34.628 21.6246 34.9008 22.2804 34.9008C22.9362 34.9008 23.5624 34.628 24.0091 34.1479L38.0381 19.0686Z"
        fill={color}
      />
    </svg>
  )
);

export default Success;
