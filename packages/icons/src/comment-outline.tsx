import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const CommentOutline = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M43.401 2H7.14829C3.35567 2 0.274658 5.0758 0.274658 8.86199V31.0093C0.274658 34.7877 3.34785 37.8557 7.12483 37.8713V47.9184L21.5915 37.8713H43.401C47.1936 37.8713 50.2747 34.7955 50.2747 31.0093V8.86199C50.2747 5.0758 47.1858 2 43.401 2ZM47.3422 31.0093C47.3422 33.1795 45.5749 34.9438 43.401 34.9438H20.6688L10.0494 42.321V34.9438H7.14829C4.97438 34.9438 3.20709 33.1795 3.20709 31.0093V8.86199C3.20709 6.69176 4.97438 4.92747 7.14829 4.92747H43.401C45.5749 4.92747 47.3422 6.69176 47.3422 8.86199V31.0093Z" fill={color} />
    <path d="M13.6544 12.3359H36.8872V15.2634H13.6544V12.3359Z" fill={color} />
    <path d="M13.6544 18.5734H36.8872V21.5009H13.6544V18.5734Z" fill={color} />
    <path d="M13.6544 24.8109H36.8872V27.7383H13.6544V24.8109Z" fill={color} />
  </svg>
));

export default CommentOutline;
