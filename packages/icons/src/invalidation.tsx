import React from 'react';
import type { IconProps } from './icon.props';

export const Invalidation = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M37.5886 0.000549316L14.9324 0.000551297V8.35755C14.9324 9.3282 14.1511 10.1094 13.1805 10.1094H4.33817L4.33817 41.9512C4.33817 42.8627 5.07207 43.5966 5.98353 43.5966H37.5887C38.5001 43.5966 39.234 42.8627 39.234 41.9512V1.64591C39.234 0.746286 38.5001 0.000549316 37.5886 0.000549316ZM42.9153 45.8812C42.9153 46.7098 42.2406 47.3845 41.412 47.3845H12.8017V48.5919C12.8017 49.3731 13.4291 50.0005 14.2103 50.0005H44.2529C45.0342 50.0005 45.6615 49.3731 45.6615 48.5919V11.4233C45.6615 10.6421 45.0342 10.0147 44.2529 10.0147H42.9153V45.8812ZM13.1094 8.6298H4.64586L13.1094 0.556885V8.6298ZM14.6848 28.2887C13.8488 29.1246 13.8488 30.48 14.6848 31.316C15.5207 32.1519 16.8761 32.1519 17.7121 31.316L22.2531 26.775L26.7942 31.3162C27.6302 32.1521 28.9856 32.1521 29.8215 31.3162C30.6575 30.4802 30.6575 29.1248 29.8215 28.2889L25.2804 23.7477L29.8213 19.2067C30.6573 18.3708 30.6573 17.0154 29.8213 16.1794C28.9854 15.3434 27.63 15.3434 26.794 16.1794L22.2531 20.7204L17.7123 16.1796C16.8763 15.3437 15.5209 15.3437 14.685 16.1796C13.849 17.0156 13.849 18.371 14.685 19.2069L19.2257 23.7477L14.6848 28.2887Z"
      fill={color}
    />
  </svg>
);

export default Invalidation;
