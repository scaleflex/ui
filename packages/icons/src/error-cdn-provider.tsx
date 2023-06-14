import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ErrorCdnProvider = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M42.5 0.000549316H7.5C3.25 0.000549316 0 3.25055 0 7.50055V42.5005C0 46.7505 3.25 50.0005 7.5 50.0005H42.5C46.75 50.0005 50 46.7505 50 42.5005V7.50055C50 3.25055 46.75 0.000549316 42.5 0.000549316ZM15 37.5005C15 39.0005 14 40.0005 12.5 40.0005C11 40.0005 10 39.0005 10 37.5005V27.5005C10 26.0005 11 25.0005 12.5 25.0005C14 25.0005 15 26.0005 15 27.5005V37.5005ZM27.5 37.5005C27.5 39.0005 26.5 40.0005 25 40.0005C23.5 40.0005 22.5 39.0005 22.5 37.5005V12.5005C22.5 11.0005 23.5 10.0005 25 10.0005C26.5 10.0005 27.5 11.0005 27.5 12.5005V37.5005ZM40 37.5005C40 39.0005 39 40.0005 37.5 40.0005C36 40.0005 35 39.0005 35 37.5005V22.5005C35 21.0005 36 20.0005 37.5 20.0005C39 20.0005 40 21.0005 40 22.5005V37.5005Z"
        fill={color}
      />
    </svg>
  )
);

export default ErrorCdnProvider;
