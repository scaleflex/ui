import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const NoRepeat = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M7.08893 5.85075H4.1506C2.20038 5.85075 0.61774 7.43339 0.61774 9.38361V28.1609H7.68346V12.9267H14.1649L7.08893 5.85075Z"
        fill={color}
      />
      <path
        d="M38.3027 37.0645H13.3095V32.9088C13.3095 32.1532 12.4722 31.7142 11.8494 32.1328L0.413529 39.8214C-0.137843 40.1889 -0.137843 41.0058 0.413529 41.3836L11.8392 49.0824C12.462 49.501 13.2993 49.0517 13.2993 48.3064V44.1404H45.3786L38.3027 37.0645Z"
        fill={color}
      />
      <path d="M49.3733 39.6127L42.3076 32.547V21.8303H49.3733L49.3733 39.6127Z" fill={color} />
      <path
        d="M22.6873 12.9267L15.6113 5.85075H36.7019V1.69504C36.7019 0.949666 37.5392 0.500401 38.1621 0.919034L49.5877 8.6076C50.1391 8.98539 50.1391 9.80224 49.5775 10.1698L38.1518 17.8686C37.529 18.2872 36.6917 17.8482 36.6917 17.0926V12.9267H22.6873Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.76339 0.764002C2.78125 -0.253854 4.43152 -0.253854 5.44937 0.764002L49.2366 44.5512C50.2545 45.5691 50.2545 47.2194 49.2366 48.2372C48.2188 49.2551 46.5685 49.2551 45.5506 48.2372L1.76339 4.44998C0.745536 3.43213 0.745536 1.78186 1.76339 0.764002Z"
        fill={color}
      />
    </svg>
  )
);

export default NoRepeat;
