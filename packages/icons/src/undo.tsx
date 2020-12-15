import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Undo = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M0.822348 22.368C0.457366 22.5505 0.274902 23.0979 0.274902 23.4629C0.274902 23.8279 0.457366 24.1928 0.822348 24.5578L22.9026 42.806C23.2676 43.1709 23.8151 43.1709 24.3625 42.9884C24.9099 42.8059 25.0924 42.2585 25.0924 41.7111V32.222C34.034 32.222 40.0559 32.9519 47.5377 46.0906C47.7201 46.4556 48.2676 46.8205 48.815 46.8205C48.9975 46.8205 48.9975 46.8205 49.18 46.8205C49.7275 46.6381 50.2749 46.0906 50.2749 45.5432V44.4483C50.2749 39.7038 50.2749 32.4045 46.9902 26.3826C43.1581 19.2658 35.8589 15.6162 25.0924 15.2512V5.39721C25.0924 4.84976 24.7274 4.30232 24.3625 4.11985C23.8151 3.93739 23.2676 3.93739 22.9026 4.30232L0.822348 22.368Z" fill={color} />
  </svg>
));

export default Undo;
