import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Tick = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12.9783 2.30184C12.7972 2.12074 12.586 2 12.3143 2C12.0728 2 11.8314 2.09055 11.6503 2.30184L4.73816 9.84779L2.29327 7.34254C2.11217 7.16143 1.8707 7.07088 1.62923 7.07088C1.38776 7.07088 1.14629 7.19162 0.995367 7.37272C0.663345 7.76511 0.663345 8.36879 1.02555 8.73099L4.13448 11.9003C4.31559 12.0814 4.52687 12.1719 4.76835 12.1719C5.00982 12.1719 5.25129 12.0814 5.43239 11.8701L12.9783 3.62993C13.3406 3.2979 13.3406 2.66404 12.9783 2.30184Z"
        fill={color}
      />
    </svg>
  )
);

export default Tick;
