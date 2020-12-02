import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Star = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = '#FFAC4A', size = 9, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 9 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M4.67423 0.118274L5.91611 2.62175C5.93582 2.68088 5.99496 2.72031 6.07381 2.72031L8.83354 3.11456C8.99124 3.13427 9.05038 3.33139 8.95181 3.44967L6.96086 5.40119C6.92144 5.44062 6.90173 5.51946 6.90173 5.5786L7.37482 8.33833C7.39454 8.49603 7.23684 8.61431 7.07914 8.55517L4.61509 7.25415C4.55595 7.21473 4.49682 7.21473 4.43768 7.25415L1.93421 8.53546C1.79622 8.61431 1.61881 8.49603 1.63852 8.31862L2.11162 5.55889C2.13133 5.49975 2.09191 5.4209 2.05248 5.38148L0.0615333 3.44967C-0.056741 3.3511 0.00239614 3.15398 0.179807 3.11456L2.93954 2.72031C2.99868 2.72031 3.05781 2.66117 3.09724 2.62175L4.33912 0.118274C4.39826 -0.0394247 4.59538 -0.0394247 4.67423 0.118274Z" fill={color} />
  </svg>
));

export default Star;
