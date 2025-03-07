import React from 'react';
import type { IconProps } from './icon.props';

export const BoxAlignLeft = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g id="ic-box-align-left">
      <path
        id="ic-sidebar-right"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.01146 0.000488281C0.900542 0.000488281 -3.8147e-05 0.901065 -3.8147e-05 2.01198V47.989C-3.8147e-05 49.0999 0.900542 50.0005 2.01146 50.0005C3.12238 50.0005 4.02295 49.0999 4.02295 47.989V2.01198C4.02295 0.901065 3.12238 0.000488281 2.01146 0.000488281Z"
        fill={color}
      />
      <g id="ic-desc">
        <path
          d="M12.9999 21.001H46.9997C48.6569 21.001 50 19.6579 50 18.0003C50 16.3431 48.6573 15 46.9997 15H12.9999C11.3431 15.0004 10 16.3435 10 18.0007C10 19.6579 11.3431 21.001 12.9999 21.001Z"
          fill={color}
        />
        <path
          d="M12.9999 35.2737H31.4997C33.1569 35.2737 34.5 33.9306 34.5 32.273C34.5 30.6158 33.1573 29.2727 31.4997 29.2727H12.9999C11.3431 29.2731 10 30.6162 10 32.2734C10 33.9306 11.3431 35.2737 12.9999 35.2737Z"
          fill={color}
        />
      </g>
    </g>
  </svg>
);

export default BoxAlignLeft;
