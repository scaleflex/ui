import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Bookmark = intrinsicComponent<IconProps, SVGSVGElement>(
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
      {/* <svg width="36" height="50" viewBox="0 0 36 50" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
      <path
        d="M35.054 6.84238H0.105258V2.10535C0.105258 0.947406 1.05266 0 2.2106 0H32.9487C34.1066 0 35.054 0.947406 35.054 2.10535V6.84238Z"
        fill={color}
      />
      <path
        d="M33.2645 49.7914L17.4744 37.4752L1.57899 49.7914C0.947391 50.3178 -1.52588e-05 49.7914 -1.52588e-05 48.844V9.05299H34.8435V48.844C34.8435 49.7914 34.0013 50.3178 33.2645 49.7914Z"
        fill={color}
      />
      {/* </svg> */}
    </svg>
  )
);

export default Bookmark;
