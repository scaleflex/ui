import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Organize = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.516 0.000549316H17.4838C15.4516 0.000549316 14 1.45216 14 3.48442V14.0025H3.48381C1.45156 14.0025 0 15.4541 0 17.4864V46.5186C0 48.5509 1.74188 50.0025 3.48381 50.0025H32.516C34.5483 50.0025 35.9999 48.2606 35.9999 46.5186V36.0005H46.516C48.5482 36.0005 49.9999 34.2586 49.9999 32.5167V3.48442C49.9999 1.45216 48.2579 0.000549316 46.516 0.000549316ZM14 16.1201V32.5167C14 34.5489 15.7419 36.0005 17.4838 36.0005H33.8823V46.5186C33.8823 47.2067 33.2663 47.8849 32.516 47.8849H3.48381C2.79579 47.8849 2.11764 47.269 2.11764 46.5186V17.4864C2.11764 16.6236 2.62114 16.1201 3.48381 16.1201H14Z"
        fill={color}
      />
    </svg>
  )
);

export default Organize;
