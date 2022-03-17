import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ImageOutline = intrinsicComponent<IconProps, SVGSVGElement>(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.3032 17.8662C34.0646 17.8662 36.3032 15.6276 36.3032 12.8662C36.3032 10.1048 34.0646 7.86618 31.3032 7.86618C28.5418 7.86618 26.3032 10.1048 26.3032 12.8662C26.3032 15.6276 28.5418 17.8662 31.3032 17.8662ZM31.3032 15.3662C32.6839 15.3662 33.8032 14.2469 33.8032 12.8662C33.8032 11.4855 32.6839 10.3662 31.3032 10.3662C29.9225 10.3662 28.8032 11.4855 28.8032 12.8662C28.8032 14.2469 29.9225 15.3662 31.3032 15.3662Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9372 15.1063C16.3967 15.0794 16.8338 15.3071 17.075 15.6991L25.0831 28.7141L29.8357 24.4289C30.0935 24.1966 30.4362 24.0818 30.7819 24.1121C31.1276 24.1424 31.4452 24.3151 31.6586 24.5887L40.2822 35.6497C40.5759 36.0264 40.6292 36.5376 40.4196 36.9668C40.21 37.396 39.7741 37.6683 39.2964 37.6683H6.70331C6.2766 37.6683 5.87937 37.4506 5.64974 37.091C5.42011 36.7313 5.38981 36.2794 5.56937 35.8923L14.8765 15.8282C15.0702 15.4106 15.4777 15.1333 15.9372 15.1063ZM16.1652 18.991L8.66108 35.1683H36.7368L30.5126 27.1848L25.6422 31.5761C25.3666 31.8246 24.9947 31.9378 24.6274 31.885C24.26 31.8322 23.9351 31.6189 23.7406 31.3027L16.1652 18.991Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H43C44.3807 0.5 45.5 1.61929 45.5 3V43C45.5 44.3807 44.3807 45.5 43 45.5H3C1.61929 45.5 0.5 44.3807 0.5 43V3ZM3 3H43V43H3V3Z"
        fill={color}
      />
    </svg>
  )
);

export default ImageOutline;