import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Resize = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M0.5 0.5H3V2.375H2.375V3H0.5V0.5Z" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 21.125H3V21.2693H24.7308V43H24.875V45.5L0.5 45.5001V21.125ZM22.2308 43L3 43.0001V23.7693H22.2308V43Z"
        fill={color}
      />
      <path d="M43 45.5H45.5V43H43.625V43.625H43V45.5Z" fill={color} />
      <path d="M45.5 3V0.5H43V2.375H43.625V3H45.5Z" fill={color} />
      <path d="M6.125 0.5V3H9.875V0.5H6.125Z" fill={color} />
      <path d="M13.625 0.5V3H17.375V0.5H13.625Z" fill={color} />
      <path d="M21.125 0.5V3H24.875V0.5H21.125Z" fill={color} />
      <path d="M28.625 0.5V3H32.375V0.5H28.625Z" fill={color} />
      <path d="M36.125 0.5V3H39.875V0.5H36.125Z" fill={color} />
      <path d="M45.5 6.125H43V9.875H45.5V6.125Z" fill={color} />
      <path d="M45.5 13.625H43V17.375H45.5V13.625Z" fill={color} />
      <path d="M45.5 21.125H43V24.875H45.5V21.125Z" fill={color} />
      <path d="M45.5 28.625H43V32.375H45.5V28.625Z" fill={color} />
      <path d="M45.5 36.125H43V39.875H45.5V36.125Z" fill={color} />
      <path d="M39.875 45.5V43H36.125V45.5H39.875Z" fill={color} />
      <path d="M32.375 45.5V43H28.625V45.5H32.375Z" fill={color} />
      <path d="M0.5 17.375H3V13.625H0.5V17.375Z" fill={color} />
      <path d="M0.5 9.875H3V6.125H0.5V9.875Z" fill={color} />
      <path
        d="M35.1391 9.23718L26.3209 17.8619C25.8274 18.3446 25.8186 19.136 26.3013 19.6295C26.784 20.1231 27.5754 20.1319 28.069 19.6492L37.1012 10.815V16.9907C37.1012 17.681 37.6609 18.2407 38.3512 18.2407C39.0416 18.2407 39.6012 17.681 39.6012 16.9907V7.98718C39.6012 7.29683 39.0416 6.73718 38.3512 6.73718L29.3477 6.73718C28.6574 6.73718 28.0977 7.29683 28.0977 7.98718C28.0977 8.67754 28.6574 9.23718 29.3477 9.23718L35.1391 9.23718Z"
        fill={color}
      />
    </svg>
  )
);

export default Resize;
