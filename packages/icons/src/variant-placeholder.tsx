import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const VariantPlaceholder = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 116 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M7.44199 49.8924C7.44199 49.2931 7.91491 48.8072 8.4983 48.8072H16.2445C16.8279 48.8072 17.3009 49.2931 17.3009 49.8924C17.3009 50.4918 16.8279 50.9776 16.2445 50.9776H8.4983C7.91491 50.9776 7.44199 50.4918 7.44199 49.8924Z"
        fill={color}
      />
      <path
        d="M1.45634 40.8493C0.872952 40.8493 0.400024 41.3351 0.400024 41.9344C0.400024 42.5338 0.872953 43.0196 1.45634 43.0196H13.4278C14.0112 43.0196 14.4841 42.5338 14.4841 41.9344C14.4841 41.3351 14.0112 40.8493 13.4278 40.8493H1.45634Z"
        fill={color}
      />
      <path
        d="M108.558 17.5637C108.558 16.9643 108.085 16.4785 107.502 16.4785H99.7555C99.1721 16.4785 98.6992 16.9643 98.6992 17.5637C98.6992 18.163 99.1721 18.6488 99.7555 18.6488H107.502C108.085 18.6488 108.558 18.163 108.558 17.5637Z"
        fill={color}
      />
      <path
        d="M114.544 8.52051C115.127 8.52051 115.6 9.00635 115.6 9.60568C115.6 10.205 115.127 10.6909 114.544 10.6909H102.572C101.989 10.6909 101.516 10.205 101.516 9.60568C101.516 9.00635 101.989 8.52051 102.572 8.52051H114.544Z"
        fill={color}
      />
      <path
        d="M34.3645 10.6964V49.1371C34.3645 50.3743 34.8509 51.5609 35.7166 52.4358C36.5823 53.3107 37.7565 53.8022 38.9808 53.8022H77.0193C78.2437 53.8022 79.4179 53.3107 80.2836 52.4358C81.1493 51.5609 81.6357 50.3743 81.6357 49.1371V10.6964C81.6357 9.45911 81.1493 8.27252 80.2836 7.39764C79.4179 6.52275 78.2437 6.03125 77.0193 6.03125H38.9808C37.7565 6.03125 36.5823 6.52275 35.7166 7.39764C34.8509 8.27252 34.3645 9.45911 34.3645 10.6964ZM78.6522 12.3118V41.913L64.1998 28.2225L58.9295 31.4717L50.8632 23.3202L37.3479 32.3083V12.5267C37.3479 11.6037 37.7108 10.7185 38.3566 10.0658C39.0024 9.41317 39.8784 9.04651 40.7917 9.04651H75.4208C76.2778 9.04651 77.0997 9.39052 77.7057 10.0029C78.3117 10.6152 78.6522 11.4458 78.6522 12.3118Z"
        fill={color}
      />
      <path
        d="M68.8982 23.74C71.9001 23.74 74.3336 21.2808 74.3336 18.2471C74.3336 15.2135 71.9001 12.7542 68.8982 12.7542C65.8963 12.7542 63.4627 15.2135 63.4627 18.2471C63.4627 21.2808 65.8963 23.74 68.8982 23.74Z"
        fill={color}
      />
    </svg>
  )
);

export default VariantPlaceholder;