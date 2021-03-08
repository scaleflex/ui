import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const OnePerson = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M30.1809 22.5124H19.7331C15.0067 22.5124 11.2754 26.3682 11.2754 31.0945V48.2587C11.2754 49.2537 12.0217 50 13.0167 50H37.0217C38.0167 50 38.763 49.2537 38.763 48.2587V31.0945C38.6386 26.3682 34.9072 22.5124 30.1809 22.5124Z"
        fill={color}
      />
      <path
        d="M24.957 0C19.36 0 14.758 4.60199 14.758 10.199C14.758 14.0547 16.8724 17.4129 19.9819 19.1542C21.4744 20.0249 23.2157 20.5224 24.957 20.5224C26.6983 20.5224 28.4396 20.0249 29.9321 19.1542C33.0416 17.4129 35.156 14.0547 35.156 10.199C35.156 4.60199 30.554 0 24.957 0Z"
        fill={color}
      />
    </svg>
  )
);

export default OnePerson;
