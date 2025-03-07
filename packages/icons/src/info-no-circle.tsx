import React from 'react';
import type { IconProps } from './icon.props';

export const InfoNoCircle = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 10 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M0.714392 14.8241C0.714392 14.4343 1.03419 14.1182 1.42868 14.1182H8.57155C8.96604 14.1182 9.28584 14.4343 9.28584 14.8241V47.2947C9.28584 47.6845 8.96604 48.0005 8.57155 48.0005H1.42868C1.03419 48.0005 0.714392 47.6845 0.714392 47.2947V14.8241Z"
      fill={color}
    />
    <path
      d="M10.0001 5.17609C10.0001 7.59459 7.85728 9.88289 5.00013 9.88289C2.14298 9.88289 0.00012207 7.76524 0.00012207 5.17609C0.00012207 2.54216 1.86333 0.000549316 5.00013 0.000549316C8.13693 0.000549316 10.0001 2.3125 10.0001 5.17609Z"
      fill={color}
    />
  </svg>
);

export default InfoNoCircle;
