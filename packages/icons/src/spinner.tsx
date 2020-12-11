import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Spinner = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 28, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size * 0.964}
    height={size}
    viewBox="0 0 27 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M22.2125 24.1457C18.1028 27.5501 12.5057 27.9962 7.96448 25.7403L9.82583 24.1984C13.4487 25.6082 17.668 25.0746 20.8194 22.4641C23.9708 19.8535 25.2802 15.8071 24.5692 11.9852L26.4305 10.4433C27.802 15.325 26.3222 20.7413 22.2125 24.1457Z" fill={color} />
    <path d="M19.481 2.05391L17.6197 3.59583C14.0123 2.20467 9.79587 2.70431 6.62605 5.33014C3.47466 7.94071 2.18072 12.0058 2.87629 15.809L1.01494 17.3509C-0.356502 12.4692 1.14172 7.03766 5.233 3.6485C9.34271 0.244076 14.9397 -0.201991 19.481 2.05391Z" fill={color} />
  </svg>
));

export default Spinner;
