import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const NavigationGroupToggle = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size * (50 / 40)}
    height={size}
    viewBox="0 0 40 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M36.6071 0H28.5714H2.67857C1.20536 0 0 1.20536 0 2.67857V39.2857V47.3214C0 48.7946 1.20536 50 2.67857 50H10.7143H36.6071C37.1205 50 37.5893 49.8549 37.9911 49.6094C38.1027 49.5424 38.2031 49.4643 38.3036 49.3862C38.471 49.2522 38.6161 49.096 38.75 48.9174C38.8281 48.817 38.8951 48.7054 38.9621 48.5938C39.0625 48.404 39.1406 48.2031 39.1964 47.9911C39.2299 47.8683 39.2522 47.7344 39.2634 47.6004C39.2746 47.5112 39.2746 47.4219 39.2746 47.3214V10.7143V2.67857C39.2857 1.20536 38.0804 0 36.6071 0Z" fill={color} />
  </svg>
));

export default NavigationGroupToggle;
