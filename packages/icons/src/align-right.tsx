import React from 'react';
import type { IconProps } from './icon.props';

export const AlignRight = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M45 1.89453C45 1.20418 44.4404 0.644531 43.75 0.644531H16.25C15.5596 0.644531 15 1.20418 15 1.89453C15 2.58489 15.5596 3.14453 16.25 3.14453H43.75C44.4404 3.14453 45 2.58489 45 1.89453Z"
      fill={color}
    />
    <path
      d="M45 14.3945C45 13.7042 44.4404 13.1445 43.75 13.1445H1.25C0.559645 13.1445 0 13.7042 0 14.3945C0 15.0849 0.559645 15.6445 1.25 15.6445H43.75C44.4404 15.6445 45 15.0849 45 14.3945Z"
      fill={color}
    />
    <path
      d="M43.75 25.6445C44.4404 25.6445 45 26.2042 45 26.8945C45 27.5849 44.4404 28.1445 43.75 28.1445H16.25C15.5596 28.1445 15 27.5849 15 26.8945C15 26.2042 15.5596 25.6445 16.25 25.6445H43.75Z"
      fill={color}
    />
  </svg>
);

export default AlignRight;
