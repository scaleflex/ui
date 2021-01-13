import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Products = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M25.4749 22.475L44.3749 12.975C45.0749 12.575 45.0749 11.575 44.3749 11.175L25.4749 2.075C25.1749 1.975 24.8749 1.975 24.5749 2.075C24.5749 2.075 11.1749 8.975 6.3749 11.575C5.6749 11.975 5.6749 12.975 6.3749 13.375C11.2749 15.775 24.6749 22.475 24.6749 22.475C24.8749 22.675 25.2749 22.675 25.4749 22.475Z" fill={color} />
    <path d="M26.3749 23.675C26.0749 23.775 25.8749 24.175 25.8749 24.475V47.675C25.8749 48.375 26.6749 48.875 27.2749 48.575C31.9749 46.275 46.4749 39.075 46.4749 39.075C46.7749 38.875 46.9749 38.575 46.9749 38.175V14.875C46.9749 14.175 46.1749 13.675 45.5749 13.975L26.3749 23.675Z" fill={color} />
    <path d="M23.6749 23.875L5.6749 14.875C4.9749 14.575 4.2749 15.075 4.2749 15.775V38.775C4.2749 39.175 4.4749 39.475 4.8749 39.675L22.8749 48.675C23.5749 48.975 24.2749 48.475 24.2749 47.775V24.775C24.2749 24.375 24.0749 23.975 23.6749 23.875Z" fill={color} />
  </svg>
));

export default Products;
