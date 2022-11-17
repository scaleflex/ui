import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Upload = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M13.1195 15.0001C13.3193 15.5283 13.9187 15.9508 14.5181 15.9508H19.5531V34.4156C19.5531 35.2607 20.2525 36.0001 21.0517 36.0001H28.9639C29.7631 36.0001 30.4624 35.2607 30.4624 34.4156V15.8452H35.4974C36.0968 15.8452 36.5963 15.5283 36.8961 14.8945C37.0959 14.3663 36.9959 13.6269 36.6962 13.2043L26.2066 0.528297C25.9069 0.211396 25.5073 0.00012207 25.1077 0.00012207C24.7081 0.00012207 24.3085 0.211396 24.0088 0.528297L13.5191 13.2043C12.9197 13.7325 12.9197 14.3663 13.1195 15.0001Z"
        fill={color}
      />
      <path
        d="M43.7343 34.0001V43.6001H6.26566V34.0001H0V46.8001C0 48.6135 1.35756 50.0001 3.13283 50.0001H46.8672C48.6424 50.0001 50 48.6135 50 46.8001V34.0001H43.7343Z"
        fill={color}
      />
    </svg>
  )
);

export default Upload;
