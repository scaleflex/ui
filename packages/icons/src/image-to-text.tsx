import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ImageToText = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
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
        d="M8.85426 10.9763C10.4139 10.9763 11.6782 9.71201 11.6782 8.1524C11.6782 6.5928 10.4139 5.32849 8.85426 5.32849C7.29465 5.32849 6.03034 6.5928 6.03034 8.1524C6.03034 9.71201 7.29465 10.9763 8.85426 10.9763ZM8.85426 9.67632C9.69589 9.67632 10.3782 8.99404 10.3782 8.1524C10.3782 7.31077 9.69589 6.62849 8.85426 6.62849C8.01262 6.62849 7.33034 7.31077 7.33034 8.1524C7.33034 8.99404 8.01262 9.67632 8.85426 9.67632Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.3687 22.85C20.8232 22.85 20.3803 23.2918 20.3803 23.838V27.6003C20.3803 28.1464 20.8227 28.5887 21.3687 28.5887H23.1655C23.7117 28.5887 24.1535 28.1459 24.1535 27.6003V26.6231H25.6436V35.2991H25.031C24.4849 35.2991 24.0426 35.7414 24.0426 36.2875V38.0843C24.0426 38.6304 24.4854 39.0723 25.031 39.0723H30.0297C30.5752 39.0723 31.0181 38.6304 31.0181 38.0843V36.2875C31.0181 35.7414 30.5757 35.2991 30.0297 35.2991H29.4171V26.6231H30.9072V27.6003C30.9072 28.1459 31.349 28.5887 31.8952 28.5887H33.692C34.238 28.5887 34.6803 28.1464 34.6803 27.6003V23.838C34.6803 23.2918 34.2375 22.85 33.692 22.85H21.3687ZM21.6803 27.2887V24.15H33.3803V27.2887H32.2072V26.3115C32.2072 25.765 31.764 25.3231 31.2188 25.3231H29.1055C28.5595 25.3231 28.1171 25.7655 28.1171 26.3115V35.6107C28.1171 36.1568 28.5594 36.5991 29.1055 36.5991H29.7181V37.7722H25.3426V36.5991H25.9552C26.5012 36.5991 26.9436 36.1568 26.9436 35.6107V26.3115C26.9436 25.7655 26.5012 25.3231 25.9552 25.3231H23.8419C23.2967 25.3231 22.8535 25.765 22.8535 26.3115V27.2887H21.6803Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.0303 4V18H39.0303C40.1349 18 41.0303 18.8954 41.0303 20V41C41.0303 42.1046 40.1349 43 39.0303 43H16.0303C14.9258 43 14.0303 42.1046 14.0303 41V27H4.03034C2.92577 27 2.03034 26.1046 2.03034 25V19.3548L2.00001 19.3245L2.03034 19.2942V4C2.03034 2.89543 2.92577 2 4.03034 2H27.0303C28.1349 2 29.0303 2.89543 29.0303 4ZM4.03034 3.5H27.0303C27.3065 3.5 27.5303 3.72386 27.5303 4V13.2638L22.5489 7.45021C21.8245 6.60481 20.5053 6.6418 19.8294 7.52645L14.0124 15.1403C13.9208 15.2602 13.7448 15.2723 13.6377 15.166L11.1205 12.669C10.4363 11.9902 9.33205 11.9925 8.65057 12.6739L3.53034 17.7942V4C3.53034 3.72386 3.75419 3.5 4.03034 3.5ZM27.4608 15.488L27.5303 15.4284V18H16.0303C14.9258 18 14.0303 18.8954 14.0303 20V25.5H4.03034C3.7542 25.5 3.53034 25.2761 3.53034 25V19.9155L9.71123 13.7346C9.80859 13.6372 9.96633 13.6369 10.0641 13.7339L12.5813 16.231C13.3309 16.9746 14.5633 16.89 15.2043 16.051L21.0214 8.4371C21.1179 8.31072 21.3064 8.30544 21.4099 8.42621L27.4608 15.488ZM39.0303 19.5C39.3065 19.5 39.5303 19.7239 39.5303 20V41C39.5303 41.2761 39.3065 41.5 39.0303 41.5H16.0303C15.7542 41.5 15.5303 41.2761 15.5303 41V20C15.5303 19.7239 15.7542 19.5 16.0303 19.5H39.0303Z"
        fill={color}
      />
      <path
        d="M8.51234 35.397L6.2345 33.1192L7.12279 32.2309L10.9171 36.0252L7.12279 39.8195L6.2345 38.9312L8.51234 36.6533H5.17109C3.43924 36.6533 2.03034 35.2444 2.03034 33.5126V31H3.28664V33.5126C3.28664 34.5517 4.13196 35.397 5.17109 35.397H8.51234Z"
        fill={color}
      />
    </svg>
  )
);

export default ImageToText;