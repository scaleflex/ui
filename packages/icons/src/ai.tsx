import React from 'react';

import type { IconProps } from './icon.props';

export const Ai = ({
  color = '#6649D1',
  color2 = '#FFD600',
  width = '36',
  height = '18',
  ref,
  ...rest
}: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={width}
    height={height}
    viewBox="0 0 36 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <rect width={width} height={height} rx="4" fill={color} />
    <path
      d="M10.1895 5.60547L7.64062 13H6.09961L9.31055 4.46875H10.2949L10.1895 5.60547ZM12.3223 13L9.76758 5.60547L9.65625 4.46875H10.6465L13.8691 13H12.3223ZM12.1992 9.83594V11.002H7.55859V9.83594H12.1992ZM16.3945 4.46875V13H14.9238V4.46875H16.3945Z"
      fill="white"
    />
    <g clipPath="url(#clip0_29438_6317)">
      <path
        d="M24.2814 4.40108C24.6007 5.92462 25.7915 7.11543 27.315 7.43481C27.502 7.47401 27.636 7.63899 27.636 7.83012C27.636 8.02126 27.502 8.18622 27.315 8.22542C25.7915 8.54473 24.6006 9.73551 24.2813 11.259C24.2421 11.4461 24.0771 11.5801 23.8859 11.5801C23.6948 11.5801 23.5298 11.4461 23.4906 11.259C23.1713 9.73551 21.9805 8.54473 20.457 8.22535C20.27 8.18615 20.136 8.02117 20.136 7.83004C20.136 7.63892 20.27 7.47394 20.457 7.43474C21.9806 7.1154 23.1714 5.92462 23.4907 4.40111C23.5299 4.21406 23.6949 4.08008 23.886 4.08008C24.0772 4.08008 24.2421 4.21406 24.2814 4.40108Z"
        fill={color2}
      />
      <path
        d="M28.0716 9.96053C28.2334 10.7325 28.8368 11.3359 29.6088 11.4977C29.7576 11.5289 29.8642 11.6602 29.8642 11.8123C29.8642 11.9643 29.7576 12.0956 29.6088 12.1268C28.8368 12.2886 28.2334 12.892 28.0716 13.664C28.0404 13.8128 27.9091 13.9194 27.7571 13.9194C27.605 13.9194 27.4737 13.8128 27.4425 13.664C27.2807 12.892 26.6773 12.2886 25.9054 12.1268C25.7565 12.0955 25.6499 11.9643 25.6499 11.8122C25.6499 11.6602 25.7565 11.5289 25.9054 11.4977C26.6773 11.3359 27.2807 10.7325 27.4426 9.96051C27.4737 9.81166 27.605 9.70508 27.7571 9.70508C27.9092 9.70508 28.0404 9.8117 28.0716 9.96053Z"
        fill={color2}
      />
    </g>
    <defs>
      <clipPath id="clip0_29438_6317">
        <rect width="10" height="10" fill="white" transform="translate(20 4)" />
      </clipPath>
    </defs>
  </svg>
);

export default Ai;
