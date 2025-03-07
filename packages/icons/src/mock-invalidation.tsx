import React from 'react';
import type { IconProps } from './icon.props';

export const MockInvalidation = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M25 0.000549316C38.8075 0.000549316 50 11.1931 50 25.0005C50 38.808 38.8075 50.0005 25 50.0005C11.1925 50.0005 0 38.808 0 25.0005C0 11.1931 11.1925 0.000549316 25 0.000549316ZM35 27.5005H15V32.5005H35V27.5005ZM35 17.5005H15V22.5005H35V17.5005Z"
      fill={color}
    />
  </svg>
);

export default MockInvalidation;
