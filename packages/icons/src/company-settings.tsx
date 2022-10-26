import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CompanySettings = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M31.25 9.54175C30.1 9.54175 29.1667 8.60841 29.1667 7.45841V4.33341H20.8333V7.45841C20.8333 8.60841 19.9 9.54175 18.75 9.54175C17.6 9.54175 16.6667 8.60841 16.6667 7.45841V4.33341C16.6667 2.0355 18.5354 0.166748 20.8333 0.166748H29.1667C31.4646 0.166748 33.3333 2.0355 33.3333 4.33341V7.45841C33.3333 8.60841 32.4 9.54175 31.25 9.54175Z"
        fill={color}
      />
      <path
        d="M26.4792 28.0417C26.1042 28.1876 25.5625 28.2917 25 28.2917C24.4375 28.2917 23.8958 28.1876 23.3958 28.0001L0 20.2084V36.1042C0 39.2709 2.5625 41.8334 5.72917 41.8334H44.2708C47.4375 41.8334 50 39.2709 50 36.1042V20.2084L26.4792 28.0417Z"
        fill={color}
      />
      <path
        d="M50 12.1459V16.9167L25.5 25.0834C25.3333 25.1459 25.1667 25.1667 25 25.1667C24.8333 25.1667 24.6667 25.1459 24.5 25.0834L0 16.9167V12.1459C0 8.97925 2.5625 6.41675 5.72917 6.41675H44.2708C47.4375 6.41675 50 8.97925 50 12.1459Z"
        fill={color}
      />
    </svg>
  )
);

export default CompanySettings;
