import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const PostProcessing = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M38.1836 26.8599V22.4654H41.2109C46.0575 22.4654 50 18.5229 50 13.6763C50 8.82975 46.0575 4.88727 41.2109 4.88727H38.1836V0.492737H11.8164V4.88727H0V7.81696H11.8164V12.2115H38.1836V7.81696H41.2109C44.4425 7.81696 47.0703 10.4448 47.0703 13.6763C47.0703 16.9079 44.4425 19.5357 41.2109 19.5357H38.1836V15.1412H11.8164V19.5357H8.78906C3.94248 19.5357 0 23.4782 0 28.3248C0 33.1714 3.94248 37.1138 8.78906 37.1138H11.8164V41.5084H38.1836V37.1138H50V34.1841H38.1836V29.7896H11.8164V34.1841H8.78906C5.55752 34.1841 2.92969 31.5563 2.92969 28.3248C2.92969 25.0932 5.55752 22.4654 8.78906 22.4654H11.8164V26.8599H38.1836Z"
        fill={color}
      />
    </svg>
  )
);

export default PostProcessing;
