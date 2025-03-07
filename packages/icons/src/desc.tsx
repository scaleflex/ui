import React from 'react';
import type { IconProps } from './icon.props';

export const Desc = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M2.99988 6.27369H46.9997C48.6569 6.27369 50 4.93056 50 3.27299C50 1.61584 48.6573 0.272705 46.9997 0.272705H2.99988C1.34313 0.273116 0 1.61625 0 3.2734C0 4.93056 1.34313 6.27369 2.99988 6.27369Z"
      fill={color}
    />
    <path
      d="M2.99988 20.5464H31.4997C33.1569 20.5464 34.5 19.2033 34.5 17.5457C34.5 15.8885 33.1573 14.5454 31.4997 14.5454H2.99988C1.34313 14.5458 0 15.889 0 17.5461C0 19.2033 1.34313 20.5464 2.99988 20.5464Z"
      fill={color}
    />
    <path
      d="M2.99988 35.5464H19.9997C21.6569 35.5464 23 34.2033 23 32.5457C23 30.8885 21.6573 29.5454 19.9997 29.5454H2.99988C1.34313 29.5458 0 30.889 0 32.5461C0 34.2033 1.34313 35.5464 2.99988 35.5464Z"
      fill={color}
    />
  </svg>
);

export default Desc;
