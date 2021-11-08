import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const AlignLeft = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M0 1.89453C0 1.20418 0.559644 0.644531 1.25 0.644531H28.75C29.4404 0.644531 30 1.20418 30 1.89453C30 2.58489 29.4404 3.14453 28.75 3.14453H1.25C0.559645 3.14453 0 2.58489 0 1.89453Z"
        fill={color}
      />
      <path
        d="M0 14.3945C0 13.7042 0.559644 13.1445 1.25 13.1445H43.75C44.4404 13.1445 45 13.7042 45 14.3945C45 15.0849 44.4404 15.6445 43.75 15.6445H1.25C0.559645 15.6445 0 15.0849 0 14.3945Z"
        fill={color}
      />
      <path
        d="M1.25 25.6445C0.559644 25.6445 0 26.2042 0 26.8945C0 27.5849 0.559645 28.1445 1.25 28.1445H28.75C29.4404 28.1445 30 27.5849 30 26.8945C30 26.2042 29.4404 25.6445 28.75 25.6445H1.25Z"
        fill={color}
      />
    </svg>
  )
);

export default AlignLeft;
