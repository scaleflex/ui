import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CheckBox = intrinsicComponent<IconProps, SVGSVGElement>(
  (
    { getIconBackgroundColor, checked, isHovering, color = '#6879EB', stroke = '#DFE7ED', size, disabled, ...rest },
    ref
  ): JSX.Element => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <rect width="16" height="16" rx="1" fill={getIconBackgroundColor() || color} stroke={stroke} />
        <path
          d="M13.7392 3.48978C13.5654 3.31592 13.3625 3.20001 13.1017 3.20001C12.8699 3.20001 12.6381 3.28694 12.4642 3.48978L5.82863 10.7339L3.48154 8.32885C3.30768 8.15499 3.07587 8.06806 2.84406 8.06806C2.61225 8.06806 2.38043 8.18397 2.23555 8.35782C1.91681 8.73452 1.91681 9.31405 2.26453 9.66177L5.24911 12.7043C5.42296 12.8782 5.6258 12.9651 5.85761 12.9651C6.08942 12.9651 6.32123 12.8782 6.49509 12.6753L13.7392 4.76474C14.0869 4.446 14.0869 3.83749 13.7392 3.48978Z"
          fill={isHovering && !checked ? '#6879eb66' : '#ffff'}
        />
      </svg>
    );
  }
);

export default CheckBox;
