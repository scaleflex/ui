import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Tick = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = '#5D6D7E', size = 12, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M11.4288 1.25729L5.4288 11.2573C5.34457 11.3977 5.19695 11.4879 5.03361 11.4989C4.87027 11.5099 4.71189 11.4402 4.60962 11.3124L0.609619 6.31239L1.39049 5.6877L4.94128 10.1262L10.5713 0.742798L11.4288 1.25729Z" fill={color} />
  </svg>
));

export default Tick;
