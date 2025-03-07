import React from 'react';
import type { IconProps } from './icon.props';

export const OrientationAny = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M45.6896 9.08579L45.9017 12.1264L46.0432 15.0962L39.6792 8.73224L42.649 8.87366L45.6896 9.08579Z"
      fill={color}
    />
    <path
      d="M6.45737 39.9397L6.17453 36.9698L6.03311 34L12.3971 40.3639L9.42722 40.2225L6.45737 39.9397Z"
      fill={color}
    />
    <path
      d="M8.36619 9.28829L5.39634 9.57113L5.11349 12.541L4.97207 15.5108L11.336 9.14687L8.36619 9.28829Z"
      fill={color}
    />
    <path
      d="M45.2151 40.9397L42.2452 41.2225L39.2754 41.364L45.6394 35L45.4979 37.9698L45.2151 40.9397Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.275391 9C0.275391 6.79086 2.06625 5 4.27539 5H46.2754C48.4845 5 50.2754 6.79086 50.2754 9V41C50.2754 43.2091 48.4845 45 46.2754 45H4.27539C2.06625 45 0.275391 43.2091 0.275391 41V9ZM4.27539 7H46.2754C47.38 7 48.2754 7.89543 48.2754 9V41C48.2754 42.1046 47.38 43 46.2754 43H4.27539C3.17082 43 2.27539 42.1046 2.27539 41V9C2.27539 7.89543 3.17082 7 4.27539 7Z"
      fill={color}
    />
  </svg>
);

export default OrientationAny;
