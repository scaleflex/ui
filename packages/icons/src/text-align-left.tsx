import React from 'react';
import type { IconProps } from './icon.props';

export const TextAlignLeft = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 45 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M0 1.89502C0 1.20466 0.559644 0.64502 1.25 0.64502H28.75C29.4404 0.64502 30 1.20466 30 1.89502C30 2.58538 29.4404 3.14502 28.75 3.14502H1.25C0.559645 3.14502 0 2.58538 0 1.89502Z"
      fill={color}
    />
    <path
      d="M0 14.395C0 13.7047 0.559644 13.145 1.25 13.145H43.75C44.4404 13.145 45 13.7047 45 14.395C45 15.0854 44.4404 15.645 43.75 15.645H1.25C0.559645 15.645 0 15.0854 0 14.395Z"
      fill={color}
    />
    <path
      d="M1.25 25.645C0.559644 25.645 0 26.2047 0 26.895C0 27.5854 0.559645 28.145 1.25 28.145H28.75C29.4404 28.145 30 27.5854 30 26.895C30 26.2047 29.4404 25.645 28.75 25.645H1.25Z"
      fill={color}
    />
  </svg>
);

export default TextAlignLeft;
