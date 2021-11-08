import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Position = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <path d="M9.25008 9.24878H11.7501V10.9675H10.9688V11.7488H9.25008V9.24878Z" fill={color} />
      <path d="M9.25008 34.2488V36.7488H11.7501V35.03H10.9688V34.2488H9.25008Z" fill={color} />
      <path d="M34.2501 36.7488H36.7501V34.2488H35.0313V35.03H34.2501V36.7488Z" fill={color} />
      <path d="M36.7501 11.7488V9.24878H34.2501V10.9675H35.0313V11.7488H36.7501Z" fill={color} />
      <path d="M14.4063 9.24878V11.7488H17.8438V9.24878H14.4063Z" fill={color} />
      <path d="M21.2813 9.24878V11.7488H24.7188V9.24878H21.2813Z" fill={color} />
      <path d="M28.1563 9.24878V11.7488H31.5938V9.24878H28.1563Z" fill={color} />
      <path d="M36.7501 14.405H34.2501V17.8425H36.7501V14.405Z" fill={color} />
      <path d="M36.7501 21.28H34.2501V24.7175H36.7501V21.28Z" fill={color} />
      <path d="M36.7501 28.155H34.2501V31.5925H36.7501V28.155Z" fill={color} />
      <path d="M31.5938 36.7488V34.2488H28.1563V36.7488H31.5938Z" fill={color} />
      <path d="M24.7188 36.7488V34.2488H21.2813V36.7488H24.7188Z" fill={color} />
      <path d="M17.8438 36.7488V34.2488H14.4063V36.7488H17.8438Z" fill={color} />
      <path d="M9.25008 31.5925H11.7501V28.155H9.25008V31.5925Z" fill={color} />
      <path d="M9.25008 24.7175H11.7501V21.28H9.25008V24.7175Z" fill={color} />
      <path d="M9.25008 17.8425H11.7501V14.405H9.25008V17.8425Z" fill={color} />
      <path
        d="M23.0002 26.7497C25.0712 26.7497 26.7502 25.0708 26.7502 22.9997C26.7502 20.9286 25.0712 19.2497 23.0002 19.2497C20.9291 19.2497 19.2502 20.9286 19.2502 22.9997C19.2502 25.0708 20.9291 26.7497 23.0002 26.7497Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 0.5C1.61929 0.5 0.5 1.61929 0.5 3V43C0.5 44.3807 1.61929 45.5 3 45.5H43C44.3807 45.5 45.5 44.3807 45.5 43V3C45.5 1.61929 44.3807 0.5 43 0.5H3ZM43 3H3V43H43V3Z"
        fill={color}
      />
    </svg>
  )
);

export default Position;
