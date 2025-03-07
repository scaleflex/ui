import React from 'react';
import type { IconProps } from './icon.props';

export const FontItalic = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M19 48L26.9931 2H31.2019L23.2087 48H19Z" fill={color} />
  </svg>
);

export default FontItalic;
