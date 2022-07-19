import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Spacing = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.29986 0.991788C4.78802 0.503633 5.57947 0.503633 6.06763 0.991788L9.367 4.29116C9.85516 4.77932 9.85516 5.57077 9.367 6.05893C8.87885 6.54708 8.08739 6.54708 7.59924 6.05893L6.43374 4.89344V34.0829L7.59924 32.9174C8.08739 32.4293 8.87885 32.4293 9.367 32.9174C9.85516 33.4056 9.85516 34.197 9.367 34.6852L6.06763 37.9846C5.8332 38.219 5.51524 38.3507 5.18371 38.3507C4.85217 38.3507 4.53422 38.219 4.29981 37.9845L1.00084 34.6851C0.512712 34.1969 0.512761 33.4055 1.00095 32.9174C1.48913 32.4292 2.28059 32.4293 2.76871 32.9175L3.93374 34.0827V4.89344L2.76825 6.05893C2.2801 6.54708 1.48864 6.54708 1.00049 6.05893C0.51233 5.57077 0.51233 4.77932 1.00049 4.29116L4.29986 0.991788ZM13.1588 8.34109V1.49725H46.3156V8.34102H43.398V7.19776C43.398 5.54595 42.0562 4.20442 40.4047 4.20442H31.8516V26.0992C31.8516 28.1387 33.5088 29.7957 35.5481 29.7957H36.5137V32.4599H23.01V29.7957H23.9756C26.0151 29.7957 27.6721 28.1387 27.6721 26.0992V4.20448H19.0697C17.418 4.20448 16.0763 5.54604 16.0763 7.19783V8.34109H13.1588ZM46.9995 39.7088C47.4877 39.2207 47.4877 38.4292 46.9995 37.9411L43.7001 34.6417C43.212 34.1535 42.4205 34.1535 41.9324 34.6417C41.4442 35.1298 41.4442 35.9213 41.9324 36.4095L43.0979 37.5749L15.0832 37.5749L16.2484 36.4099C16.7366 35.9218 16.7366 35.1303 16.2485 34.6421C15.7604 34.154 14.9689 34.1539 14.4807 34.642L11.1814 37.941C10.9469 38.1754 10.8152 38.4934 10.8152 38.8249C10.8152 39.1564 10.9469 39.4744 11.1813 39.7088L14.4807 43.0082C14.9688 43.4964 15.7603 43.4964 16.2485 43.0082C16.7366 42.5201 16.7366 41.7286 16.2485 41.2404L15.083 40.0749L43.0979 40.0749L41.9324 41.2404C41.4442 41.7286 41.4442 42.5201 41.9324 43.0082C42.4205 43.4964 43.212 43.4964 43.7001 43.0082L46.9995 39.7088Z"
        fill={color}
      />
    </svg>
  )
);

export default Spacing;