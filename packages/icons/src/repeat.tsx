import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Repeat = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M49.5877 8.6076L38.1621 0.919034C37.5392 0.500401 36.7019 0.949666 36.7019 1.69504V5.85075H4.1506C2.20038 5.85075 0.61774 7.43339 0.61774 9.38361V28.1609H7.68346V12.9267H36.6917V17.0926C36.6917 17.8482 37.529 18.2872 38.1518 17.8686L49.5775 10.1698C50.1391 9.80224 50.1391 8.98539 49.5877 8.6076Z"
        fill={color}
      />
      <path
        d="M42.3178 37.0645H13.3095V32.9088C13.3095 32.1532 12.4722 31.7142 11.8494 32.1328L0.413529 39.8214C-0.137843 40.1889 -0.137843 41.0058 0.413529 41.3836L11.8392 49.0824C12.462 49.501 13.2993 49.0517 13.2993 48.3064V44.1404H45.8404C47.7906 44.1404 49.3733 42.5578 49.3733 40.6076V21.8303H42.3076V37.0645H42.3178Z"
        fill={color}
      />
    </svg>
  )
);

export default Repeat;
