import React from 'react';
import type { IconProps } from './icon.props';

export const Optimization = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M31.4264 11.4951L36.16 3.31314C32.7744 1.65156 29.0126 0.679749 24.9999 0.679749C20.9871 0.679749 17.2255 1.65156 13.8397 3.31314L18.5734 11.4951C20.0781 10.8054 21.7083 10.3353 23.4324 10.1786L25.022 10.0904L26.5673 10.1786C28.2915 10.3352 29.9217 10.8054 31.4264 11.4951Z"
      fill={color}
    />
    <path
      d="M21.0287 32.6904C23.1184 34.5282 26.269 34.8066 28.6769 33.1629C31.0848 31.5192 31.9732 28.4834 31.0227 25.868L38.8936 20.495L39.3697 19.6633C39.9627 21.0778 40.3555 22.599 40.5162 24.1911H49.9998C49.5004 16.1222 45.2154 9.08786 38.8709 4.86794L34.1351 13.0705C35.8569 14.3131 37.304 15.8951 38.3895 17.7187L37.1261 17.9059L29.2553 23.2789C27.1657 21.441 24.015 21.1627 21.6071 22.8064C19.1992 24.4502 18.3109 27.4858 19.2613 30.1013L16.4909 31.9925L18.2584 34.5816L21.0287 32.6904Z"
      fill={color}
    />
    <path
      d="M0.0175476 27.3261H9.42658C9.63721 29.2754 10.2139 31.1109 11.0643 32.7901L2.75714 37.3212C1.18392 34.3 0.243357 30.9115 0.0175476 27.3261Z"
      fill={color}
    />
    <path
      d="M9.48368 24.1911C9.94539 19.6156 12.3245 15.6256 15.8648 13.0705L11.129 4.86794C4.7844 9.08786 0.499425 16.1221 0 24.1911H9.48368Z"
      fill={color}
    />
    <path
      d="M38.9359 32.7901C39.7862 31.111 40.3629 29.2754 40.5735 27.3261H49.9825C49.7567 30.9114 48.8162 34.3 47.2429 37.3212L38.9359 32.7901Z"
      fill={color}
    />
  </svg>
);

export default Optimization;
