import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Thesaurus = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g clipPath="url(#clip0_22527_32949)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3953 50.0005C9.86273 50.0005 6.99994 47.1377 6.99994 43.6051V6.39584C6.99994 4.70049 7.67436 3.07258 8.87203 1.87258C10.072 0.674907 11.6999 0.000488281 13.3953 0.000488281H16.2092H41.3023C42.2651 0.000488281 43.0465 0.781884 43.0465 1.74467V38.954C43.0465 39.9168 42.2651 40.6982 41.3023 40.6982H16.2092H13.3953C11.7906 40.6982 10.4883 42.0005 10.4883 43.6051C10.4883 45.2098 11.7906 46.5121 13.3953 46.5121H41.3023C42.2651 46.5121 43.0465 47.2935 43.0465 48.2563C43.0465 49.2191 42.2651 50.0005 41.3023 50.0005H13.3953ZM33.3255 12.7912H18.5813C17.6185 12.7912 16.8371 12.0098 16.8371 11.047C16.8371 10.0842 17.6185 9.30281 18.5813 9.30281H33.3255C34.2883 9.30281 35.0697 10.0842 35.0697 11.047C35.0697 12.0098 34.2883 12.7912 33.3255 12.7912ZM18.588 20.5005H33.3322C34.295 20.5005 35.0764 19.7191 35.0764 18.7563C35.0764 17.7935 34.295 17.0121 33.3322 17.0121H18.588C17.6252 17.0121 16.8438 17.7935 16.8438 18.7563C16.8438 19.7191 17.6252 20.5005 18.588 20.5005Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_22527_32949">
          <rect width="50" height="50" fill="white" transform="translate(0 0.000488281)" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Thesaurus;
