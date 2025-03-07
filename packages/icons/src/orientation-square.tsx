import React from 'react';
import type { IconProps } from './icon.props';

export const OrientationSquare = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M28.0754 4.9L25.7754 3L23.4754 4.9L21.2754 6.9H30.2754L28.0754 4.9Z" fill={color} />
    <path d="M3.27539 25.5L5.17539 23.2L7.17539 21V30L5.17539 27.8L3.27539 25.5Z" fill={color} />
    <path d="M47.2754 25.5L45.2754 27.8L43.2754 30V21L45.2754 23.2L47.2754 25.5Z" fill={color} />
    <path d="M25.7754 46.9L23.4754 45L21.2754 43H30.2754L28.0754 45L25.7754 46.9Z" fill={color} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.275391 4C0.275391 1.79086 2.06625 0 4.27539 0H46.2754C48.4845 0 50.2754 1.79086 50.2754 4V46C50.2754 48.2091 48.4845 50 46.2754 50H4.27539C2.06625 50 0.275391 48.2091 0.275391 46V4ZM4.27539 2H46.2754C47.38 2 48.2754 2.89543 48.2754 4V46C48.2754 47.1046 47.38 48 46.2754 48H4.27539C3.17082 48 2.27539 47.1046 2.27539 46V4C2.27539 2.89543 3.17082 2 4.27539 2Z"
      fill={color}
    />
  </svg>
);

export default OrientationSquare;
