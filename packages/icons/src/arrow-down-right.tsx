import React from 'react';
import type { IconProps } from './icon.props';

export const ArrowDownRight = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.9099 32.9104C32.4097 33.4106 31.721 33.6755 31.0145 33.6394L12.385 32.6876C11.0061 32.6171 9.94536 31.4421 10.0158 30.0632C10.0863 28.6843 11.2612 27.6236 12.6401 27.6941L24.7781 28.3143L1.09006 4.62617C0.113747 3.64986 0.113748 2.06695 1.09006 1.09064C2.06637 0.114329 3.64928 0.114327 4.62559 1.09064L28.3137 24.7787L27.6935 12.6407C27.623 11.2618 28.6837 10.0868 30.0627 10.0164C31.4416 9.94594 32.6165 11.0067 32.687 12.3856L33.6388 31.0151C33.6749 31.7216 33.4101 32.4103 32.9099 32.9104Z"
      fill={color}
    />
  </svg>
);

export default ArrowDownRight;
