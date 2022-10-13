import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Spinner3 = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M39.0625 41.9361C32.2542 47.5618 22.9818 48.299 15.4587 44.5711L18.5423 42.0232C24.544 44.3529 31.5339 43.4711 36.7546 39.1573C41.9753 34.8433 44.1445 28.1567 42.9667 21.8411L46.0502 19.2932C48.3222 27.3601 45.8707 36.3104 39.0625 41.9361Z"
        fill={color}
      />
      <path
        d="M34.5373 5.42985L31.4538 7.97784C25.4776 5.67898 18.4925 6.50463 13.2413 10.8438C8.02058 15.1577 5.87699 21.8752 7.0293 28.1599L3.94572 30.7078C1.67373 22.6409 4.15574 13.6654 10.9335 8.06488C17.7418 2.43914 27.014 1.70202 34.5373 5.42985Z"
        fill={color}
      />
    </svg>
  )
);

export default Spinner3;
