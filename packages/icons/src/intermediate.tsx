import React from 'react';
import type { IconProps } from './icon.props';

export const Intermediate = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M0.75 7.00006C0.75 6.48229 1.16973 6.06256 1.6875 6.06256H12.3125C12.8303 6.06256 13.25 6.48229 13.25 7.00006C13.25 7.51783 12.8303 7.93756 12.3125 7.93756H1.6875C1.16973 7.93756 0.75 7.51783 0.75 7.00006Z"
      fill={color}
    />
  </svg>
);

export default Intermediate;
