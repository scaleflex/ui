import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const AlignCenter2 = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g id="ic-align-center">
        <path
          id="ic-text-align-center"
          d="M3 25C3 24.3096 3.54721 23.75 4.22222 23.75H45.7778C46.4528 23.75 47 24.3096 47 25C47 25.6904 46.4528 26.25 45.7778 26.25H4.22222C3.54721 26.25 3 25.6904 3 25Z"
          fill={color}
        />
        <path
          id="ic-arrow-right-alt"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.0009 4C25.592 4 26.0712 4.50039 26.0712 5.11765L26.0704 16.3728L31.2137 11.5393C31.6531 11.1264 32.3298 11.1636 32.7252 11.6224C33.1207 12.0812 33.085 12.7879 32.6457 13.2008L25.716 19.7131C25.3089 20.0956 24.6911 20.0956 24.284 19.7131L17.3543 13.2008C16.915 12.7879 16.8793 12.0812 17.2747 11.6224C17.6702 11.1636 18.3469 11.1264 18.7863 11.5393L23.9298 16.373L23.9306 5.11765C23.9306 4.50039 24.4098 4 25.0009 4Z"
          fill={color}
        />
        <path
          id="ic-arrow-right-alt_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.0009 46C25.592 46 26.0712 45.4996 26.0712 44.8824L26.0704 33.6272L31.2137 38.4607C31.6531 38.8736 32.3298 38.8364 32.7252 38.3776C33.1207 37.9188 33.085 37.2121 32.6457 36.7992L25.716 30.2869C25.3089 29.9044 24.6911 29.9044 24.284 30.2869L17.3543 36.7992C16.915 37.2121 16.8793 37.9188 17.2747 38.3776C17.6702 38.8364 18.3469 38.8736 18.7863 38.4607L23.9298 33.627L23.9306 44.8824C23.9306 45.4996 24.4098 46 25.0009 46Z"
          fill={color}
        />
      </g>
    </svg>
  )
);

export default AlignCenter2;
