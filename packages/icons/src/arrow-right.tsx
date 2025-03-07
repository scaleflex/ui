import React from 'react';
import type { IconProps } from './icon.props';

export const ArrowRight = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 46 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M45.5 15.0005C45.5 15.7079 45.2003 16.3822 44.6753 16.8562L30.8291 29.3562C29.8042 30.2814 28.2234 30.2006 27.2982 29.1758C26.373 28.1509 26.4537 26.57 27.4786 25.6448L36.5 17.5005L3 17.5005C1.61928 17.5005 0.499999 16.3812 0.499999 15.0005C0.499999 13.6198 1.61929 12.5005 3 12.5005L36.5 12.5005L27.4786 4.35618C26.4537 3.43096 26.373 1.85011 27.2982 0.82525C28.2234 -0.199608 29.8042 -0.280382 30.8291 0.644837L44.6753 13.1448C45.2003 13.6189 45.5 14.2931 45.5 15.0005Z"
      fill={color}
    />
  </svg>
);

export default ArrowRight;
