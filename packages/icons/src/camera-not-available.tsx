import React from 'react';
import type { IconProps } from './icon.props';

export const CameraNotAvailable = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M12.7084 17.941C12.7084 14.4434 15.5302 11.599 19 11.599C22.4699 11.599 25.2917 14.4434 25.2917 17.941C25.2917 21.4386 22.4699 24.2829 19 24.2829C15.5302 24.2829 12.7084 21.4386 12.7084 17.941Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M44.0972 22.6563C44.2639 22.6563 44.375 22.7647 44.375 22.9272V29.698C44.375 30.2938 43.875 30.7813 43.2639 30.7813H35.4861C34.875 30.7813 34.375 30.2938 34.375 29.698V22.9272C34.375 22.7647 34.4861 22.6563 34.6528 22.6563H35.4861V21.573C35.4861 19.4876 37.2361 17.7813 39.375 17.7813C41.5139 17.7813 43.2639 19.4876 43.2639 21.573V22.6563H44.0972ZM40.1528 28.5334C40.1806 28.4792 40.2083 28.398 40.2083 28.3167L40.0417 26.773C40.3194 26.5834 40.4861 26.2584 40.4861 25.9063C40.4861 25.3105 39.9861 24.823 39.375 24.823C38.7639 24.823 38.2639 25.3105 38.2639 25.9063C38.2639 26.2584 38.4306 26.5834 38.7083 26.773L38.5417 28.3167C38.5417 28.3746 38.5698 28.4325 38.5961 28.4805L38.618 28.5202C38.6205 28.5247 38.6228 28.5292 38.625 28.5334C38.6528 28.5876 38.7361 28.6147 38.8194 28.6147H39.9306C40.0139 28.6147 40.0972 28.5876 40.1528 28.5334ZM41.5972 21.573C41.5972 20.3813 40.5972 19.4063 39.375 19.4063C38.1528 19.4063 37.1528 20.3813 37.1528 21.573V22.6563H41.5972V21.573Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.268 6.84247C35.8098 6.84247 37.8751 8.92426 37.875 11.4848V14.0724C38.2851 14.0249 38.7022 14.0005 39.125 14.0005C45.0621 14.0005 49.875 18.8134 49.875 24.7505C49.875 30.6875 45.0621 35.5005 39.125 35.5005C36.0852 35.5005 33.3401 34.2388 31.3848 32.2105H4.73206C2.19027 32.2105 0.125 30.1287 0.125 27.5681V11.4848C0.125 8.92426 2.19027 6.84247 4.73206 6.84247H6.43398C6.62745 6.84247 6.79423 6.71085 6.84296 6.52059L7.65776 3.22277C8.05886 1.61983 9.48075 0.500488 11.1182 0.500488H26.8819C28.5193 0.500488 29.9412 1.61983 30.3408 3.22121L31.1571 6.52223C31.2059 6.71085 31.3726 6.84247 31.5661 6.84247H33.268ZM9.56252 17.941C9.56252 23.1874 13.7952 27.454 19 27.454C24.2048 27.454 28.4376 23.1874 28.4376 17.941C28.4376 12.6945 24.2048 8.42795 19 8.42795C13.7952 8.42795 9.56252 12.6945 9.56252 17.941ZM30.0105 13.1845C30.0105 14.0597 30.7152 14.77 31.5834 14.77C32.4517 14.77 33.1563 14.0597 33.1563 13.1845C33.1563 12.3093 32.4517 11.599 31.5834 11.599C30.7152 11.599 30.0105 12.3093 30.0105 13.1845ZM48.875 24.7505C48.875 30.1353 44.5098 34.5005 39.125 34.5005C33.7402 34.5005 29.375 30.1353 29.375 24.7505C29.375 19.3657 33.7402 15.0005 39.125 15.0005C44.5098 15.0005 48.875 19.3657 48.875 24.7505Z"
      fill={color}
    />
  </svg>
);

export default CameraNotAvailable;
