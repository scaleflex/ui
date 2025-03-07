import React from 'react';
import type { IconProps } from './icon.props';

export const Down = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 46 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.23229 1.23273C2.20863 0.256448 3.79154 0.256495 4.76782 1.23284L22.9989 19.465L41.2323 1.23273C42.2086 0.256448 43.7915 0.256495 44.7678 1.23284C45.7441 2.20918 45.7441 3.79209 44.7677 4.76837L24.7665 24.7684C24.2977 25.2372 23.6618 25.5006 22.9987 25.5005C22.3357 25.5005 21.6998 25.2371 21.231 24.7683L1.23218 4.76826C0.255899 3.79192 0.255946 2.20901 1.23229 1.23273Z"
      fill={color}
    />
  </svg>
);

export default Down;
