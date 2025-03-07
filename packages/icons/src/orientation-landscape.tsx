import React from 'react';
import type { IconProps } from './icon.props';

export const OrientationLandscape = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M50.2754 8.20513V41.0043C50.2754 42.8205 48.8865 44.2094 47.0703 44.2094H3.48052C1.66428 44.2094 0.275391 42.8205 0.275391 41.0043V8.20513C0.275391 6.38889 1.66428 5 3.48052 5H47.0703C48.8865 5 50.2754 6.38889 50.2754 8.20513ZM2.41214 40.8974C2.41214 41.5385 2.83949 41.9658 3.48052 41.9658H47.0703C47.7113 41.9658 48.1386 41.5385 48.1386 40.8974V8.20513C48.1386 7.5641 47.7113 7.13675 47.0703 7.13675H3.48052C2.83949 7.13675 2.41214 7.5641 2.41214 8.20513V40.8974Z"
      fill={color}
    />
    <path d="M3.90787 24.5513L6.04462 22.094L8.18137 19.7436V29.359L6.04462 27.0085L3.90787 24.5513Z" fill={color} />
    <path d="M46.2156 24.5513L44.1856 27.0085L42.0489 29.359V19.7436L44.1856 22.094L46.2156 24.5513Z" fill={color} />
  </svg>
);

export default OrientationLandscape;
