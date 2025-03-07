import React from 'react';
import type { IconProps } from './icon.props';

export const EyeClosed = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.2553 6.05501C36.5966 5.71376 37.1514 5.71376 37.4926 6.05501C37.8339 6.39626 37.8339 6.95103 37.4926 7.29228L32.3765 12.4084C38.3601 15.8067 42.6046 20.7607 42.7917 20.9825C43.0682 21.3097 43.0699 21.7874 42.7936 22.113C42.3893 22.5908 32.7818 33.7978 22.0001 33.7978C18.9909 33.7978 15.9678 33.1203 13.0065 31.7785L7.74272 37.0423C7.57292 37.2121 7.34897 37.2978 7.12495 37.2978C6.90092 37.2978 6.67698 37.212 6.50545 37.0423C6.1642 36.701 6.1642 36.1462 6.50545 35.805L17.0426 25.2678C17.0453 25.265 17.0481 25.2622 17.0509 25.2595C17.0531 25.2573 17.0553 25.2551 17.0575 25.2529L25.7063 16.6041C25.7081 16.6023 25.7098 16.6005 25.7116 16.5987C25.7134 16.5969 25.7152 16.5952 25.717 16.5934L30.2895 12.0208C30.3028 12.0067 30.3164 11.9931 30.3304 11.9799L36.2553 6.05501ZM31.0895 13.6954L27.5301 17.2548C28.4835 18.476 28.9998 19.9721 28.9998 21.5478C28.9998 25.4083 25.8603 28.5478 21.9999 28.5478C20.4242 28.5478 18.9281 28.0314 17.7069 27.078L14.3353 30.4497C16.8728 31.5113 19.445 32.0478 22 32.0478C30.6537 32.0478 38.863 23.8071 40.9489 21.5478C39.6267 20.1195 35.855 16.3016 31.0895 13.6954ZM18.9574 25.8276C19.8392 26.458 20.8929 26.7977 21.9999 26.7977C24.8943 26.7977 27.2499 24.4422 27.2499 21.5477C27.2499 20.4409 26.9092 19.3873 26.2793 18.5056L18.9574 25.8276Z"
      fill={color}
    />
    <path
      d="M27.7418 10.3057C25.7504 9.63545 23.8184 9.29773 22.0001 9.29773C11.2183 9.29773 1.61084 20.5047 1.20659 20.9825C0.951064 21.2835 0.930064 21.721 1.15762 22.0482C1.27837 22.2215 4.17111 26.3287 9.18485 29.659C9.33358 29.7587 9.49985 29.806 9.66785 29.806C9.94963 29.806 10.2279 29.6695 10.3959 29.4122C10.6636 29.0115 10.5534 28.4672 10.1509 28.2012C6.46889 25.753 3.94889 22.7973 3.00561 21.595C5.01989 19.4075 13.2834 11.0478 22.0001 11.0478C23.6293 11.0478 25.3741 11.3558 27.1835 11.963C27.642 12.1275 28.139 11.8738 28.2913 11.4135C28.4453 10.955 28.2003 10.4598 27.7418 10.3057Z"
      fill={color}
    />
    <path
      d="M23.2197 14.6685C22.8224 14.5985 22.4164 14.5477 22 14.5477C18.1395 14.5477 15 17.6872 15 21.5477C15 21.9642 15.0508 22.3702 15.1225 22.7674C15.1977 23.1909 15.567 23.4902 15.9817 23.4902C16.0325 23.4902 16.0832 23.4867 16.1357 23.4762C16.6099 23.3922 16.9285 22.9371 16.8445 22.4629C16.7902 22.1654 16.75 21.8627 16.75 21.5477C16.75 18.6532 19.1055 16.2977 22 16.2977C22.315 16.2977 22.6177 16.338 22.9152 16.3905C23.3807 16.485 23.8444 16.1559 23.9284 15.6817C24.0124 15.2075 23.694 14.7525 23.2197 14.6685Z"
      fill={color}
    />
  </svg>
);

export default EyeClosed;
