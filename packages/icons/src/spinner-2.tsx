import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Spinner2 = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M25.2751 47.5C20.6884 47.5 16.4291 46.1302 12.875 43.7779L11.4952 45.8626C8.68495 44.0027 6.27243 41.5902 4.41251 38.78L6.49727 37.4002C4.14496 33.846 2.77515 29.5868 2.77515 25C2.77515 20.4132 4.14496 16.154 6.49727 12.5998L4.41251 11.22C6.27243 8.4098 8.68495 5.99728 11.4952 4.13736L12.8749 6.22212C16.4291 3.86982 20.6884 2.5 25.2751 2.5C29.8619 2.5 34.1212 3.86982 37.6753 6.22212L39.0551 4.13736C41.8653 5.99728 44.2779 8.4098 46.1378 11.22L44.053 12.5998C46.4053 16.154 47.7751 20.4132 47.7751 25C47.7751 29.5868 46.4053 33.846 44.053 37.4002L46.1378 38.78C44.2779 41.5902 41.8653 44.0027 39.0551 45.8626L37.6753 43.7779C34.1212 46.1302 29.8619 47.5 25.2751 47.5Z" stroke={color} strokeWidth="5" strokeDasharray="329.87 113.96" />
  </svg>
));

export default Spinner2;
