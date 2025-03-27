import React from 'react';
import type { IconProps } from './icon.props';

export const EraserOutline = ({ color = 'currentColor', size = 20, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M45.6441 46.9983H2.73937C1.77924 46.9983 1 46.219 1 45.2589C1 44.2988 1.77924 43.5195 2.73937 43.5195H45.6441C46.6042 43.5195 47.3835 44.2988 47.3835 45.2589C47.3835 46.219 46.6042 46.9983 45.6441 46.9983Z"
      fill={color}
    />
    <path
      d="M24.5627 46.9983C24.1176 46.9983 23.6722 46.8289 23.3337 46.4879C22.6539 45.8084 22.6539 44.7069 23.3337 44.0274L44.6003 22.7604C45.1545 22.2063 45.4585 21.4827 45.4585 20.7196C45.4585 19.9429 45.1545 19.2099 44.6003 18.6558L33.2132 7.26829C32.5177 6.5587 31.7083 6.41262 31.149 6.41262C30.3744 6.41262 29.6534 6.712 29.1221 7.25682L5.33697 31.0424C4.62483 31.738 4.47875 32.5453 4.47875 33.1062C4.47875 33.8808 4.77813 34.6023 5.32296 35.1331L14.2194 44.0296C14.8989 44.709 14.8989 45.8106 14.2194 46.4904C13.5395 47.1699 12.438 47.1699 11.7586 46.4904L2.87611 37.608C1.67265 36.4296 1 34.8274 1 33.1062C1 31.3694 1.67265 29.7596 2.89225 28.5676L26.6498 4.81253C29.0088 2.39116 33.3177 2.39583 35.6877 4.82654L47.0586 16.1996C48.2693 17.4103 48.9373 19.015 48.9373 20.7221C48.9373 22.4127 48.2693 24.0106 47.0586 25.2213L25.792 46.4879C25.4532 46.8289 25.0081 46.9983 24.5627 46.9983Z"
      fill={color}
    />
    <path
      d="M37.2306 34.3351C36.7852 34.3351 36.3401 34.1661 36.0012 33.8251L18.0512 15.8746C17.3718 15.1952 17.3718 14.0936 18.0512 13.4142C18.7307 12.7343 19.8322 12.7343 20.5116 13.4142L38.4621 31.3642C39.1415 32.0437 39.1415 33.1457 38.4621 33.8251C38.119 34.1635 37.6735 34.3351 37.2306 34.3351Z"
      fill={color}
    />
  </svg>
);

export default EraserOutline;
