import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CopyOutline = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.339844 11.611V1.54761C0.339844 0.995323 0.787558 0.547607 1.33984 0.547607H8.81823C9.37052 0.547607 9.81823 0.995322 9.81823 1.54761V11.611C9.81823 12.1633 9.37052 12.611 8.81824 12.611H1.33984C0.787559 12.611 0.339844 12.1633 0.339844 11.611ZM1.33984 11.611V1.54761L8.81823 1.54761L8.81824 11.611L1.33984 11.611Z"
        fill={color}
      />
      <path
        d="M11.66 4.47388C11.66 4.19774 11.4361 3.97388 11.16 3.97388C10.8838 3.97388 10.66 4.19774 10.66 4.47388V13.4523H3.40491C3.12876 13.4523 2.90491 13.6761 2.90491 13.9523C2.90491 14.2284 3.12876 14.4523 3.40491 14.4523H11.16C11.4361 14.4523 11.66 14.2284 11.66 13.9523V4.47388Z"
        fill={color}
      />
    </svg>
  )
);

export default CopyOutline;
