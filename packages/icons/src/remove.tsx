import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Remove = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 6, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 6 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M5.83827 5.14516L3.67116 2.98387L5.83827 0.822578C6.03234 0.629029 6.03234 0.33871 5.83827 0.145161C5.64421 -0.0483871 5.3531 -0.0483871 5.15903 0.145161L2.99191 2.30645L0.824797 0.145161C0.630727 -0.0483871 0.339623 -0.0483871 0.145553 0.145161C-0.0485175 0.33871 -0.0485175 0.629029 0.145553 0.822578L2.31267 2.98387L0.145553 5.14516C0.0485175 5.24194 0.016172 5.37097 0.016172 5.5C0.016172 5.62903 0.0808625 5.75806 0.145553 5.85484C0.339623 6.04839 0.630727 6.04839 0.824797 5.85484L2.99191 3.69355L5.15903 5.85484C5.25606 5.95161 5.38544 5.98387 5.51482 5.98387C5.64421 5.98387 5.77358 5.91935 5.87062 5.85484C5.96765 5.79032 6 5.62903 6 5.5C6 5.37097 5.93531 5.24194 5.83827 5.14516Z" fill={color} />
  </svg>
));

export default Remove;
