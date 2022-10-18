import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const FolderTree = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M46.5 20L25 18C27.3209 16.7732 28.8737 15.9734 29.8816 15.4704L23.3846 13.8462H3.23078V35.5385H23.2308V28.3077C23.2308 28 23.5385 27.6923 23.8462 27.6923H32.1538C32.4615 27.6923 33.3846 27.5385 34 29.0769L34.6154 30.4615H49.3846C49.6923 30.4615 50 30.7692 50 31.0769L45.5 41C39 32 31.1154 32.8846 38.5 40.5L28 41C31.6538 36.8846 25.5 41.8077 25.5 41.5L23.2308 38.7692H1.53846C0.769231 38.7692 0 38.1538 0 37.2308V0H3.23078V10.6154H23.2308L26.3098 8.62308C26.435 8.54205 26.5768 8.49006 26.7247 8.47092L49.3846 5.53846C49.6923 5.53846 50 5.84615 50 6.15384L47 19C47 19.3077 46.8077 20 46.5 20Z"
        fill={color}
      />
      <path
        d="M23 3C23 2.44771 23.4477 2 24 2H49C49.5523 2 50 2.44772 50 3V20C50 20.5523 49.5523 21 49 21H24C23.4477 21 23 20.5523 23 20V3Z"
        fill={color}
      />
      <path
        d="M23 28C23 27.4477 23.4477 27 24 27H49C49.5523 27 50 27.4477 50 28V45C50 45.5523 49.5523 46 49 46H24C23.4477 46 23 45.5523 23 45V36.5V28Z"
        fill={color}
      />
    </svg>
  )
);

export default FolderTree;
