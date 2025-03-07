import React from 'react';
import type { IconProps } from './icon.props';

export const ArrowDownLeft = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.09004 32.9104C0.589843 32.4102 0.324965 31.7215 0.361062 31.015L1.31294 12.3855C1.38339 11.0066 2.55834 9.94584 3.93725 10.0163C5.31616 10.0868 6.37688 11.2617 6.30642 12.6406L5.68623 24.7786L29.3743 1.09055C30.3506 0.114234 31.9335 0.114235 32.9098 1.09055C33.8862 2.06686 33.8862 3.64977 32.9098 4.62608L9.22177 28.3142L21.3598 27.694C22.7387 27.6235 23.9136 28.6842 23.9841 30.0631C24.0546 31.4421 22.9938 32.617 21.6149 32.6875L2.98538 33.6393C2.27892 33.6754 1.59023 33.4105 1.09004 32.9104Z"
      fill={color}
    />
  </svg>
);

export default ArrowDownLeft;
