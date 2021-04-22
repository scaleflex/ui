import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Redo = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 40 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M0.98 31.2037C0.98 41.568 9.41216 50 19.7752 50H26.4284C27.5309 50 28.4244 49.1066 28.4244 48.004V47.3386C28.4244 46.2359 27.531 45.3425 26.4284 45.3425H19.7752C11.9798 45.3425 5.6372 38.9995 5.6372 31.2037C5.6372 23.4079 11.9798 17.0648 19.7752 17.0648H32.05L23.5964 25.5189C22.6884 26.4266 22.6884 27.9043 23.5964 28.812C24.4774 29.6924 26.0107 29.6911 26.8897 28.812L39.3178 16.3828C39.7576 15.943 40 15.3582 40 14.736C40 14.1142 39.7576 13.5291 39.3178 13.0895L26.8891 0.659821C26.01 -0.21994 24.4754 -0.21994 23.5962 0.659821C22.6883 1.56728 22.6883 3.04517 23.5962 3.95252L32.0498 12.4073H19.7752C9.41216 12.4073 0.98 20.8396 0.98 31.2037Z"
        fill={color}
      />
    </svg>
  )
);

export default Redo;
