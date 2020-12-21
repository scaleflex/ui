import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Cross = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M29.9081 25.0577L45.8451 9.12074C46.5381 8.42782 46.8845 7.61942 46.8845 6.58005C46.8845 5.54068 46.5381 4.73228 45.8451 4.03937C44.4593 2.65354 42.1496 2.65354 40.8793 4.03937L24.9423 20.0919L9.00525 4.15486C7.61942 2.76903 5.4252 2.76903 4.03937 4.15486C3.34646 4.84777 3 5.65617 3 6.58005C3 7.50394 3.34646 8.42782 4.03937 9.12074L19.9764 25.0577L4.03937 40.9948C3.34646 41.6877 3 42.4961 3 43.42C3 44.3438 3.34646 45.2677 4.03937 45.9606C5.4252 47.3465 7.73491 47.3465 9.00525 45.9606L24.9423 30.0236L40.8793 45.9606C41.5722 46.6535 42.3806 47 43.42 47C44.4593 47 45.2677 46.6535 45.9606 45.9606C46.6535 45.2677 47 44.4593 47 43.42C47 42.3806 46.6535 41.5722 45.9606 40.8793L29.9081 25.0577Z" fill={color} />
  </svg>
));

export default Cross;
