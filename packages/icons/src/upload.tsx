import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Upload = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size * (10 / 14)}
    height={size}
    viewBox="0 0 10 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M0.842092 5.09355C0.92941 5.29729 1.13315 5.41372 1.33689 5.41372H3.08325V10.3908C3.08325 10.5655 3.22878 10.711 3.40342 10.711H6.89614C7.07077 10.711 7.21631 10.5655 7.21631 10.3908V5.41372H8.90445C9.10819 5.41372 9.31194 5.29729 9.39926 5.09355C9.48658 4.88981 9.45747 4.68607 9.31194 4.51143L5.52816 0.174636C5.41174 0.0582116 5.2662 0 5.12067 0C4.97514 0 4.82961 0.0582116 4.71319 0.174636L0.929406 4.51143C0.812982 4.68607 0.754774 4.91891 0.842092 5.09355Z" fill={color} />
    <path d="M9.45747 12.3119H0.812982V14H9.45747V12.3119Z" fill={color} />
  </svg>
));

export default Upload;
