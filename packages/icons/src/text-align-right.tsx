import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const TextAlignRight = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
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
        d="M45 1.89502C45 1.20466 44.4404 0.64502 43.75 0.64502H16.25C15.5596 0.64502 15 1.20466 15 1.89502C15 2.58538 15.5596 3.14502 16.25 3.14502H43.75C44.4404 3.14502 45 2.58538 45 1.89502Z"
        fill={color}
      />
      <path
        d="M45 14.395C45 13.7047 44.4404 13.145 43.75 13.145H1.25C0.559645 13.145 0 13.7047 0 14.395C0 15.0854 0.559645 15.645 1.25 15.645H43.75C44.4404 15.645 45 15.0854 45 14.395Z"
        fill={color}
      />
      <path
        d="M43.75 25.645C44.4404 25.645 45 26.2047 45 26.895C45 27.5854 44.4404 28.145 43.75 28.145H16.25C15.5596 28.145 15 27.5854 15 26.895C15 26.2047 15.5596 25.645 16.25 25.645H43.75Z"
        fill={color}
      />
    </svg>
  )
);

export default TextAlignRight;
