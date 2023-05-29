import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CollapseFolders = intrinsicComponent<IconProps, SVGSVGElement>(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.8898 41.6113C37.7033 42.4248 37.7033 43.744 36.8898 44.5575C36.0763 45.3711 34.7571 45.3711 33.9435 44.5575L25 35.614L16.0565 44.5575C15.2429 45.3711 13.9238 45.3711 13.1102 44.5575C12.2966 43.744 12.2966 42.4248 13.1102 41.6113L23.5269 31.1946C24.3404 30.3811 25.6596 30.3811 26.4731 31.1946L36.8898 41.6113Z"
        fill={color}
      />
      <path
        d="M13.1102 4.61068C12.2966 5.42428 12.2966 6.74336 13.1102 7.55697L23.5269 17.9736C23.9175 18.3643 24.4475 18.5838 25 18.5838C25.5525 18.5838 26.0825 18.3643 26.4731 17.9736L36.8898 7.55697C37.7033 6.74336 37.7033 5.42428 36.8898 4.61068C36.0763 3.79709 34.7571 3.79709 33.9435 4.61068L25 13.5542L16.0565 4.61068C15.2429 3.79709 13.9238 3.79709 13.1102 4.61068Z"
        fill={color}
      />
    </svg>
  )
);

export default CollapseFolders;
