import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const NavigationGroupPrevious = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size * (50 / 46)}
    height={size}
    viewBox="0 0 50 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M18.551 40.8888V29.5093H33.9737V16.5199H18.551V5.1405C18.551 3.95134 19.5207 3 20.6915 3H47.8595C49.0487 3 50 3.96963 50 5.1405V40.8888C50 42.0779 49.0304 43.0293 47.8595 43.0293H20.6915C19.5207 43.0293 18.551 42.0779 18.551 40.8888Z" fill={color} />
    <path d="M12.9711 11.1595V16.9956C12.9711 17.5445 13.4102 18.0018 13.9407 18.0018H32.6015V28.064H13.9407C13.4102 28.064 12.9711 28.5214 12.9711 29.0703V34.9063L0 23.0146L12.9711 11.1595Z" fill={color} />
  </svg>
));

export default NavigationGroupPrevious;
