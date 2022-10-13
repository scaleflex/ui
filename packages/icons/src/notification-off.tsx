import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const NotificationOff = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M45.0893 42.188L41.6839 36.2504C40.0813 33.542 39.2799 30.3128 39.2799 27.1878V21.9794C39.2799 15.4168 35.0732 9.79177 29.2638 8.02092V4.16671C29.2638 1.87502 27.4609 0 25.2573 0C23.0538 0 21.2509 1.87502 21.2509 4.16671V7.91675C15.4415 9.68761 11.2347 15.3127 11.2347 21.8752V27.0836C11.2347 30.3128 10.4334 33.4379 8.83084 36.1462L5.42539 42.0838C5.22507 42.3963 5.22507 42.813 5.42539 43.1255C5.62571 43.438 5.92616 43.6463 6.32681 43.6463H44.3882C44.7888 43.6463 45.0893 43.438 45.2896 43.1255C45.2896 42.9171 45.2896 42.5005 45.0893 42.188Z"
        fill={color}
      />
      <path
        d="M18.9472 45.8333C20.049 48.3333 22.4528 50 25.2573 50C28.0617 50 30.4656 48.3333 31.5673 45.8333H18.9472Z"
        fill={color}
      />
    </svg>
  )
);

export default NotificationOff;
