import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const RemoveBg = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 48 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3125 4.50439H1.67095C1.10267 4.50439 0.534393 5.05587 0.534393 5.60734V44.3941C0.534393 45.1294 1.10267 45.497 1.67095 45.497H19.3125V4.50439ZM9.35575 23.4453L3.47656 38.5034C3.31655 38.9132 3.61881 39.3557 4.05876 39.3557H16.3771C16.8256 39.3557 17.1281 38.8973 16.9518 38.485L10.5126 23.4269C10.2926 22.9124 9.55925 22.924 9.35575 23.4453Z"
        fill={color}
      />
      <path
        d="M22.7497 1.25C22.7497 0.559643 23.3093 0 23.9997 0C24.69 0 25.2497 0.559644 25.2497 1.25V48.75C25.2497 49.4404 24.69 50 23.9997 50C23.3093 50 22.7497 49.4404 22.7497 48.75V1.25Z"
        fill={color}
      />
      <path
        d="M34.9852 23.5101L29.3606 38.5098C29.2074 38.9184 29.5094 39.3542 29.9458 39.3542H41.7308C42.1754 39.3542 42.4779 38.903 42.3089 38.4918L36.1486 23.4921C35.9328 22.9666 35.1846 22.9782 34.9852 23.5101Z"
        fill={color}
      />
      <path
        d="M28.7331 45.497H46.3406C47.0906 45.497 47.4656 45.1294 47.4656 44.3941V5.60734C47.4656 5.05587 47.0906 4.50439 46.3406 4.50439H28.7331V7.00439H44.9656V42.997H28.7331V45.497Z"
        fill={color}
      />
    </svg>
  )
);

export default RemoveBg;
