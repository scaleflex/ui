import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Collaboration = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M17.8982 20.4547H32.1593C32.9338 20.4547 33.5611 19.8237 33.5611 19.0444V17.5075C33.5611 13.4769 30.3664 9.9959 26.0137 9.9959C28.3124 9.53543 30.0455 7.49521 30.0455 5.04638C30.0455 2.2592 27.799 0 25.0287 0C22.2584 0 20.0119 2.2592 20.0119 5.04638C20.0119 7.49521 21.745 9.53543 24.0438 9.9959C19.6967 9.9959 16.4964 13.4715 16.4964 17.5075V19.0444C16.4965 19.8236 17.1237 20.4547 17.8982 20.4547Z"
        fill={color}
      />
      <path
        d="M6.30107 24.39C6.38974 24.4063 6.47773 24.4141 6.56474 24.4141C7.2581 24.4141 7.87402 23.916 8.00263 23.2053C8.36288 21.2137 9.04492 19.2786 10.0297 17.4538C10.9801 15.6928 12.1719 14.1114 13.572 12.7536C14.1538 12.1894 14.1708 11.2574 13.61 10.672C13.0491 10.0867 12.1228 10.0696 11.541 10.6337C9.92509 12.201 8.55126 14.0229 7.4579 16.0489C6.3248 18.1485 5.53935 20.3789 5.12343 22.6781C4.9788 23.478 5.50605 24.2444 6.30107 24.39Z"
        fill={color}
      />
      <path
        d="M40.0278 17.4537C41.0126 19.2786 41.6946 21.2136 42.0549 23.2052C42.1835 23.916 42.7993 24.414 43.4927 24.414C43.5797 24.414 43.6678 24.4062 43.7564 24.3899C44.5514 24.2443 45.0787 23.4779 44.9339 22.678C44.518 20.3788 43.7326 18.1483 42.5995 16.0488C41.5061 14.0228 40.1323 12.2008 38.5164 10.6337C37.9345 10.0694 37.0083 10.0866 36.4474 10.6719C35.8866 11.2573 35.9037 12.1892 36.4854 12.7535C37.8856 14.1113 39.0774 15.6928 40.0278 17.4537Z"
        fill={color}
      />
      <path
        d="M30.94 35.634C29.0525 36.2582 27.0645 36.5782 25.0288 36.585C25.0024 36.586 24.9752 36.586 24.9488 36.586C22.9579 36.586 21.007 36.2867 19.1526 35.6969C18.382 35.4515 17.5606 35.8813 17.3168 36.6567C17.0729 37.432 17.5002 38.2583 18.2708 38.5036C20.4109 39.1847 22.6574 39.5301 24.9488 39.5301H25.0288C27.3758 39.5213 29.671 39.1522 31.8531 38.4309C32.6208 38.1777 33.0392 37.3455 32.7866 36.5731C32.535 35.8009 31.7077 35.3798 30.94 35.634Z"
        fill={color}
      />
      <path
        d="M9.51758 39.5411C11.8164 39.0805 13.5496 37.0396 13.5496 34.5916C13.5496 31.8044 11.3031 29.5442 8.53281 29.5442C5.7625 29.5442 3.51602 31.8044 3.51602 34.5916C3.51602 37.0396 5.24922 39.0805 7.54805 39.5411C3.20469 39.5411 0.000488281 43.0132 0.000488281 47.0528V48.5897C0.000488281 49.368 0.627734 50 1.40225 50H15.6634C16.4379 50 17.0651 49.368 17.0651 48.5897V47.0528C17.0651 43.0302 13.8792 39.5411 9.51758 39.5411Z"
        fill={color}
      />
      <path
        d="M42.453 39.5411C44.7518 39.0805 46.485 37.0396 46.485 34.5916C46.485 31.8044 44.2385 29.5442 41.4682 29.5442C38.6969 29.5442 36.4514 31.8044 36.4514 34.5916C36.4514 37.0396 38.1839 39.0805 40.4831 39.5411C36.1298 39.5411 32.9358 43.0213 32.9358 47.0527V48.5896C32.9358 49.3679 33.563 49.9999 34.3375 49.9999H48.5987C49.3722 49.9999 50.0004 49.3679 50.0004 48.5896V47.0528C50.0005 43.0218 46.8057 39.5411 42.453 39.5411Z"
        fill={color}
      />
    </svg>
  )
);

export default Collaboration;
