import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const OrientationPanorama = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M50.2754 15.2051V33.9017C50.2754 35.7179 48.8865 37.1068 47.0703 37.1068H3.48052C1.66428 37.1068 0.275391 35.7179 0.275391 33.9017V15.2051C0.275391 13.3889 1.66428 12 3.48052 12H47.0703C48.8865 12 50.2754 13.4957 50.2754 15.2051ZM2.41214 34.0085C2.41214 34.6496 2.83949 35.0769 3.48052 35.0769H47.0703C47.7113 35.0769 48.1386 34.6496 48.1386 34.0085V15.2051C48.1386 14.5641 47.7113 14.1368 47.0703 14.1368H3.48052C2.83949 14.1368 2.41214 14.5641 2.41214 15.2051V34.0085Z"
        fill={color}
      />
      <path
        d="M3.90787 24.6068L6.04462 22.1496L8.18137 19.7991V29.4145L6.04462 27.0641L3.90787 24.6068Z"
        fill={color}
      />
      <path
        d="M46.2156 24.6068L44.1856 27.0641L42.0489 29.4145V19.7991L44.1856 22.1496L46.2156 24.6068Z"
        fill={color}
      />
    </svg>
  )
);

export default OrientationPanorama;
