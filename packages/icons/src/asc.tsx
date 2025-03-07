import React from 'react';
import type { IconProps } from './icon.props';

export const Asc = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M2.99988 29.5454H46.9997C48.6569 29.5454 50 30.8885 50 32.5461C50 34.2033 48.6573 35.5464 46.9997 35.5464H2.99988C1.34313 35.546 0 34.2028 0 32.5457C0 30.8885 1.34313 29.5454 2.99988 29.5454Z"
      fill={color}
    />
    <path
      d="M2.99988 15.2727H31.4997C33.1569 15.2727 34.5 16.6158 34.5 18.2734C34.5 19.9306 33.1573 21.2737 31.4997 21.2737H2.99988C1.34313 21.2733 0 19.9301 0 18.273C0 16.6158 1.34313 15.2727 2.99988 15.2727Z"
      fill={color}
    />
    <path
      d="M2.99988 0.272697H19.9997C21.6569 0.272697 23 1.61583 23 3.27339C23 4.93055 21.6573 6.27368 19.9997 6.27368H2.99988C1.34313 6.27327 0 4.93014 0 3.27298C0 1.61583 1.34313 0.272697 2.99988 0.272697Z"
      fill={color}
    />
  </svg>
);

export default Asc;
