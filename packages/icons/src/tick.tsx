import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Tick = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 12, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M3.40256 25.4517C2.58445 24.1661 3.05194 21.8287 4.45442 20.8937C5.85689 19.9587 8.31122 20.5431 9.24621 21.5949L19.6479 36.0872L40.685 4.41461C41.62 3.01213 43.9575 2.42777 45.5937 3.71337C46.7624 4.64835 47.4636 6.28457 46.6455 7.68705L21.6347 45.437C20.5829 46.6057 18.8298 46.6057 17.7779 45.437L3.40256 25.4517Z" fill={color} />
  </svg>
));

export default Tick;
