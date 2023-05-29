import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Unsplash = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <path d="M49 48.5005V21.7331H33.8792V35.1167H16.1208V21.7331H1V48.5005H49Z" fill={color} />
      <path d="M16.1208 13.8841V0.500488H33.8792V13.8841H16.1208Z" fill={color} />
    </svg>
  )
);

export default Unsplash;
