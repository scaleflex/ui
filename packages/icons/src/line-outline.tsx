import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const LineOutline = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.21741 38.7837C0.607217 38.1735 0.607217 37.1842 1.21741 36.574L36.5716 1.21981C36.5718 1.21962 36.5728 1.21865 37.6776 2.32351C38.7825 3.42836 38.7824 3.42846 38.7822 3.42865L3.42712 38.7837C2.81693 39.3939 1.82761 39.3939 1.21741 38.7837ZM38.7825 1.21865C39.3927 1.82885 39.3924 2.81845 38.7822 3.42865L37.6776 2.32351L36.5716 1.21981C37.1818 0.609614 38.1723 0.608457 38.7825 1.21865Z"
        fill={color}
      />
    </svg>
  )
);

export default LineOutline;
