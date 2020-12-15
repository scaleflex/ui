import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Tick = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 12, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M54.4184 3.28622L24.4184 53.2862C23.9972 53.9881 23.2591 54.4394 22.4424 54.4944C21.6257 54.5493 20.8338 54.2009 20.3225 53.5617L0.322456 28.5617L4.2268 25.4382L21.9807 47.6307L50.1309 0.713745L54.4184 3.28622Z" fill={color} />
  </svg>
));

export default Tick;
