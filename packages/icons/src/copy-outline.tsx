import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CopyOutline = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M44.4329 17.5685V49.5367C44.4329 50 43.9672 50 43.5016 50H15.1009C14.6353 50 14.1697 49.5367 14.1697 49.5367V45.8302H38.8458C39.3113 45.8302 39.777 45.3669 39.777 44.9036V17.1052H43.9674C43.9674 17.1052 44.4329 17.1052 44.4329 17.5685Z"
        fill={color}
      />
      <path
        d="M28.0504 0.461197L7.66477 0C6.73815 0 6.2749 0.461218 6.2749 1.38363V43.3532C6.2749 44.2756 6.73815 44.7368 7.66477 44.7368H37.7798C38.7064 44.7368 39.1696 44.2756 39.1696 43.3532V11.5301L28.0504 0.461197ZM28.0504 11.0689V4.61204L34.5366 11.0689H28.0504ZM36.3899 13.3749V41.9696H8.59144V2.76722H25.2704V13.3749H36.3899Z"
        fill={color}
      />
    </svg>
  )
);

export default CopyOutline;
