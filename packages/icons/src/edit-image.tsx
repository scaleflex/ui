import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const EditImage = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M30.4366 20.2308C32.7285 20.2308 34.5864 18.3728 34.5864 16.081C34.5864 13.7891 32.7285 11.9312 30.4366 11.9312C28.1447 11.9312 26.2868 13.7891 26.2868 16.081C26.2868 18.3728 28.1447 20.2308 30.4366 20.2308Z" fill={color} />
    <path d="M50.2747 40.6761H45.3151V5.75708H9.18154V1H5.23417V5.75708H0.274658V9.70445H5.23417V44.6235H41.3678V49.3806H45.3151V44.6235H50.2747V40.6761ZM41.3678 9.70445V34.1984L34.89 29.6437L29.5257 33.5911L20.72 26.3036L9.18154 34.2996V9.70445H41.3678Z" fill={color} />
  </svg>
));

export default EditImage;
