import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Crop = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13.5968 11.0258H12.2124V2.22491H2.91714V0.444957C2.91714 0.197742 2.71937 -3.05176e-05 2.47215 -3.05176e-05C2.22494 -3.05176e-05 2.02716 0.197742 2.02716 0.444957V2.22491H0.444987C0.197772 2.22491 0 2.47212 0 2.71934C0 2.96655 0.197772 3.16432 0.444987 3.16432H2.02716V11.9157H11.273V13.4979C11.273 13.7451 11.4708 13.9429 11.718 13.9429C11.9652 13.9429 12.163 13.7451 12.163 13.4979V11.9157H13.5474C13.7946 11.9157 13.9924 11.718 13.9924 11.4707C14.0418 11.2235 13.844 11.0258 13.5968 11.0258ZM2.91714 11.0258V3.16432H11.273V11.0258H2.91714Z"
        fill={color}
      />
    </svg>
  )
);

export default Crop;
