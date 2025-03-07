import React from 'react';
import type { IconProps } from './icon.props';

export const Transparency = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M0.166672 0.166664H8.50001V8.5H0.166672V0.166664Z" fill={color} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.8333 8.5H8.50001V16.8333H0.166672V25.1667H8.50001V33.5H0.166672V41.8333H8.50001V33.5H16.8333V41.8333H25.1667V33.5H33.5V41.8333H41.8333V33.5H33.5V25.1667H41.8333V16.8333H33.5V8.5H41.8333V0.166664H33.5V8.5H25.1667V0.166664H16.8333V8.5ZM16.8333 16.8333V8.5H25.1667V16.8333H16.8333ZM16.8333 25.1667V33.5H25.1667V25.1667H33.5V16.8333H25.1667V25.1667H16.8333ZM16.8333 25.1667H8.50001V16.8333H16.8333V25.1667Z"
      fill={color}
    />
  </svg>
);

export default Transparency;
