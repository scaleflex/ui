import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Square = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size * (51 / 50)}
    height={size}
    viewBox="0 0 51 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M42.4624 0H8.0874C3.77959 0 0.274902 3.50469 0.274902 7.8125V42.1875C0.274902 46.4953 3.77959 50 8.0874 50H42.4624C46.7702 50 50.2749 46.4953 50.2749 42.1875V7.8125C50.2749 3.50469 46.7702 0 42.4624 0ZM46.3687 42.1875C46.3687 44.3414 44.6163 46.0938 42.4624 46.0938H8.0874C5.9335 46.0938 4.18115 44.3414 4.18115 42.1875V7.8125C4.18115 5.65859 5.9335 3.90625 8.0874 3.90625H42.4624C44.6163 3.90625 46.3687 5.65859 46.3687 7.8125V42.1875Z" fill={color} />
  </svg>
));

export default Square;
