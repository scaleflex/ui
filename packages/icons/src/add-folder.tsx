import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const AddFolder = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size * (51 / 41)}
    height={size}
    viewBox="0 0 51 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M49.2264 5.25088H21.5535L20.5052 2.63034C19.2474 -0.304672 17.5702 0.00979303 16.9413 0.00979303H1.32285C0.798737 0.00979303 0.274628 0.533902 0.274628 1.05801V39.4228C0.274628 39.9469 0.798737 40.471 1.32285 40.471H49.2264C49.7505 40.471 50.2746 39.9469 50.2746 39.4228V6.2991C50.2746 5.77499 49.7505 5.25088 49.2264 5.25088ZM44.4046 24.9574H37.1719V32.5046H33.8176V24.9574H26.5849V21.7079H33.8176V14.1607H37.1719V21.7079H44.4046V24.9574Z" fill={color} />
  </svg>
));

export default AddFolder;
