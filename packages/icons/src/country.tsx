import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Country = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 44 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M22.7266 3.12275C16.2697 -0.56709 9.48103 -0.939551 2.95691 2.00381V0H0.0272217V50H2.95691V31.729C8.97009 28.5772 15.2858 28.7099 21.2731 32.1312C24.8649 34.1837 28.5593 35.2099 32.2538 35.2099C38.4946 35.2099 42.9698 32.2663 43.8592 31.7682C43.9286 31.7294 43.9725 31.658 43.9725 31.5784V3.59349C43.9725 2.82567 43.1431 2.3443 42.4764 2.72525L41.7809 3.12266C35.5482 6.68418 28.9594 6.68418 22.7266 3.12275ZM41.0428 29.9918C35.0295 33.1437 28.714 33.0089 22.7266 29.5875C16.2697 25.8978 9.48103 25.5253 2.95691 28.4687V5.26416C8.97009 2.1123 15.2858 2.24492 21.2731 5.66631C27.7302 9.35625 34.5186 9.72939 41.0428 6.78603V29.9918Z"
        fill={color}
      />
    </svg>
  )
);

export default Country;
