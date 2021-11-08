import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const PinOutline = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M43.0081 15.2287L36.7869 17.6214L28.935 29.9601C30.5809 33.9266 30.3662 38.0903 27.1408 41.3158L26.5656 41.8909C25.9554 42.5011 24.9661 42.5011 24.3559 41.8909L14.4122 31.9472L2.99211 43.3673C2.38192 43.9775 1.3926 43.9775 0.782403 43.3673C0.17221 42.7571 0.172211 41.7678 0.782403 41.1576L12.2025 29.7375L2.25883 19.7938C1.64864 19.1836 1.64864 18.1943 2.25883 17.5841L2.50512 17.3378C5.73058 14.1123 10.2231 13.5688 14.1897 15.2147L26.5283 7.36283L28.9211 1.14165C29.327 0.0863053 30.6847 -0.201832 31.4843 0.597706L43.552 12.6655C44.3516 13.465 44.0634 14.8228 43.0081 15.2287ZM29.0752 9.44618L30.9747 4.50752L39.6422 13.1751L34.7035 15.0745L25.4251 29.655L26.0486 31.1577C27.234 34.0146 27.0773 36.5309 25.4342 38.5498L5.64209 18.7576C7.75439 17.2384 10.4304 17.0382 12.992 18.1011L14.4948 18.7246L29.0752 9.44618Z"
        fill={color}
      />
    </svg>
  )
);

export default PinOutline;
