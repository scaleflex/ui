import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Orientation = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M43.5931 30.9091V31.1363C42.4567 40.2272 34.5022 47.0454 25.4113 47.0454C15.184 47.0454 7.00218 38.8636 7.00218 28.6363C7.00218 18.8636 14.7294 10.909 24.5022 10.2272V18.1818L33.5931 9.09089L24.5022 0V7.72725C13.1385 8.18182 4.2749 17.5 4.2749 28.8636C4.2749 40.4545 13.8204 50 25.4113 50C36.0931 50 45.184 42.0454 46.3204 31.3636V30.9091H43.5931Z" fill={color} />
  </svg>
));

export default Orientation;
