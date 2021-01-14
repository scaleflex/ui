import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Documentation = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M11.3576 30.3571H38.1433V35.7143H11.3576V30.3571Z" fill={color} />
    <path d="M11.3576 5.35714H27.4291V10.7143H11.3576V5.35714Z" fill={color} />
    <path d="M34.5719 8.92857H42.2379L34.5719 1.26256V8.92857Z" fill={color} />
    <path d="M6.00049 0V50H43.5005V10.7143H32.7862V0H6.00049ZM9.57192 3.57143H29.2148V12.5H9.57192V3.57143ZM39.9291 46.4286H9.57192V44.6429H39.9291V46.4286ZM39.9291 42.8571H9.57192V41.0714H39.9291V42.8571ZM39.9291 37.5H9.57192V28.5714H39.9291V37.5ZM39.9291 25H9.57192V23.2143H39.9291V25ZM39.9291 21.4286H9.57192V19.6429H39.9291V21.4286ZM39.9291 16.0714V17.8571H9.57192V16.0714H39.9291Z" fill={color} />
  </svg>
));

export default Documentation;
