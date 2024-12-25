import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Extends = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 16, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.95203 3.7392C4.24363 3.44761 4.71639 3.44761 5.00799 3.7392C5.29957 4.0308 5.29957 4.50356 5.00799 4.79515L1.80261 8.00052L5.00799 11.2059C5.29957 11.4975 5.29957 11.9703 5.00799 12.2618C4.71639 12.5534 4.24363 12.5534 3.95203 12.2618L0.218691 8.52849C0.0786685 8.38849 0 8.19853 0 8.00052C0 7.8025 0.0786685 7.61255 0.218691 7.47255L3.95203 3.7392ZM10.993 12.2618C11.2846 12.5534 11.7574 12.5534 12.049 12.2618L15.7823 8.52849C16.0739 8.23691 16.0739 7.76412 15.7823 7.47255L12.049 3.7392C11.7574 3.44761 11.2846 3.44761 10.993 3.7392C10.7015 4.0308 10.7015 4.50356 10.993 4.79515L14.1984 8.00052L10.993 11.2059C10.7015 11.4975 10.7015 11.9703 10.993 12.2618Z"
        fill={color}
      />
    </svg>
  )
);

export default Extends;
