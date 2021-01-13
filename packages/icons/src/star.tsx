import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Star = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M26.2428 0.689995L33.1422 15.2949C33.2517 15.6399 33.5802 15.8699 34.0183 15.8699L49.3501 18.1699C50.2262 18.2849 50.5548 19.4348 50.0072 20.1248L38.9464 31.5098C38.7273 31.7397 38.6178 32.1997 38.6178 32.5447L41.2461 48.6446C41.3557 49.5646 40.4796 50.2546 39.6035 49.9096L25.9143 42.3197C25.5858 42.0897 25.2572 42.0897 24.9287 42.3197L11.0205 49.7946C10.2539 50.2546 9.2683 49.5646 9.37781 48.5296L12.0061 32.4297C12.1156 32.0847 11.8966 31.6247 11.6776 31.3948L0.616754 20.1248C-0.0403253 19.5498 0.288214 18.3999 1.27383 18.1699L16.6057 15.8699C16.9342 15.8699 17.2628 15.5249 17.4818 15.2949L24.3811 0.689995C24.7097 -0.229998 25.8048 -0.229998 26.2428 0.689995Z" fill={color} />
  </svg>
));

export default Star;
