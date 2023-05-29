import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CursorPointer = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 34 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M33.0292 31.5542L1.7792 0.30419C1.48125 0.00624064 1.0334 -0.0812594 0.64375 0.0791899C0.254101 0.239639 0 0.620889 0 1.04169V46.875C0 47.3145 0.277051 47.7083 0.691699 47.8562C1.1042 48.0062 1.56875 47.875 1.84795 47.5354L10.1687 37.3667L15.7208 49.3959C15.8958 49.7751 16.2729 50.0001 16.6666 50.0001C16.8041 50.0001 16.9437 49.973 17.077 49.9146L24.3688 46.7896C24.6271 46.6792 24.8312 46.4688 24.9312 46.2063C25.0312 45.9438 25.0229 45.6521 24.9042 45.3959L19.3354 33.3334H32.2917C32.7125 33.3334 33.0938 33.0792 33.2542 32.6896C33.4167 32.3 33.3271 31.8542 33.0292 31.5542Z"
        fill={color}
      />
    </svg>
  )
);

export default CursorPointer;
