import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Plus = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M47.7746 22.4999H27.775V2.49984C27.775 1.12014 26.6548 0 25.2747 0C23.895 0 22.7748 1.12014 22.7748 2.49984V22.4999H2.77474C1.39505 22.4999 0.274902 23.6201 0.274902 24.9998C0.274902 26.3799 1.39505 27.5001 2.77474 27.5001H22.7748V47.4997C22.7748 48.8799 23.895 50 25.2747 50C26.6548 50 27.775 48.8799 27.775 47.4997V27.5001H47.7746C49.1548 27.5001 50.2749 26.3799 50.2749 24.9998C50.2749 23.6201 49.1548 22.4999 47.7746 22.4999Z"
        fill={color}
      />
    </svg>
  )
);

export default Plus;
