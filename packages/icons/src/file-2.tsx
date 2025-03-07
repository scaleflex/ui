import React from 'react';
import type { IconProps } from './icon.props';

export const File2 = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 34 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M23.9056 0.593168V10.1894H33.6882L23.9056 0.593168Z" fill={color} />
    <path
      d="M22.4149 11.6801V0.5H1.63851C1.17267 0.5 0.800003 0.872671 0.800003 1.33851V44.6615C0.800003 45.1273 1.17267 45.5 1.63851 45.5H32.8497C33.3155 45.5 33.6882 45.1273 33.6882 44.6615V11.6801H22.4149Z"
      fill={color}
    />
  </svg>
);

export default File2;
