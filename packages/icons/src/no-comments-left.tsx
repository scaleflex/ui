import React from 'react';
import type { IconProps } from './icon.props';

export const NoCommentsLeft = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 150 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M96.7516 4.79999H53.2484C48.6972 4.79999 45 8.49094 45 13.0344V39.6111C45 44.1452 48.6878 47.8268 53.2202 47.8455V59.902L70.5802 47.8455H96.7516C101.303 47.8455 105 44.1546 105 39.6111V13.0344C105 8.49094 101.293 4.79999 96.7516 4.79999ZM61.0604 18.2209C61.0604 17.8067 61.3961 17.4709 61.8104 17.4709H88.1896C88.6039 17.4709 88.9396 17.8067 88.9396 18.2209V20.2339C88.9396 20.6481 88.6039 20.9839 88.1896 20.9839H61.8104C61.3961 20.9839 61.0604 20.6481 61.0604 20.2339V18.2209ZM61.0604 25.7058C61.0604 25.2916 61.3961 24.9558 61.8104 24.9558H88.1896C88.6039 24.9558 88.9396 25.2916 88.9396 25.7058V27.7188C88.9396 28.133 88.6039 28.4688 88.1896 28.4688H61.8104C61.3961 28.4688 61.0604 28.133 61.0604 27.7188V25.7058ZM61.8104 32.4408C61.3961 32.4408 61.0604 32.7766 61.0604 33.1908V35.2038C61.0604 35.618 61.3961 35.9538 61.8104 35.9538H88.1896C88.6039 35.9538 88.9396 35.618 88.9396 35.2038V33.1908C88.9396 32.7766 88.6039 32.4408 88.1896 32.4408H61.8104Z"
      fill={color}
    />
    <path
      d="M138.208 9C137.426 9 136.792 9.63356 136.792 10.4151C136.792 11.1966 137.426 11.8302 138.208 11.8302H148.585C149.366 11.8302 150 11.1966 150 10.4151C150 9.63356 149.366 9 148.585 9H138.208Z"
      fill={color}
    />
    <path
      d="M126.415 20.7922C126.415 20.0107 127.048 19.3771 127.83 19.3771H143.868C144.649 19.3771 145.283 20.0107 145.283 20.7922C145.283 21.5737 144.649 22.2073 143.868 22.2073H127.83C127.048 22.2073 126.415 21.5737 126.415 20.7922Z"
      fill={color}
    />
    <path
      d="M9.43384 49.0943C9.43384 48.3128 10.0674 47.6792 10.8489 47.6792H21.2263C22.0078 47.6792 22.6414 48.3128 22.6414 49.0943C22.6414 49.8759 22.0078 50.5094 21.2263 50.5094H10.8489C10.0674 50.5094 9.43384 49.8759 9.43384 49.0943Z"
      fill={color}
    />
    <path
      d="M0 38.7166C0 37.9351 0.633563 37.3015 1.4151 37.3015H17.4528C18.2343 37.3015 18.8679 37.9351 18.8679 38.7166C18.8679 39.4981 18.2343 40.1317 17.4528 40.1317H1.4151C0.633563 40.1317 0 39.4981 0 38.7166Z"
      fill={color}
    />
  </svg>
);

export default NoCommentsLeft;
