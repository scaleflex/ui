import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Store = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M0.888867 0.888916H15.1111V2.66671H0.888867V0.888916Z" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.888875 3.54173H15.1111L16 7.98618V9.76397H15.1111V15.0973H13.3333V9.76397H9.77775V15.0973H0.888875V9.76397H0V7.98618L0.888875 3.54173ZM2.66667 13.3195H8V9.76397H2.66667V13.3195Z"
        fill={color}
      />
    </svg>
  )
);

export default Store;
