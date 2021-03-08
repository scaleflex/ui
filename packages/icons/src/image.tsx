import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Image = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <svg width="51" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M49.233 0H1.31629C0.795461 0 0.274628 0.520833 0.274628 1.04167V48.9583C0.274628 49.4792 0.795461 50 1.31629 50H49.233C49.7538 50 50.2746 49.4792 50.2746 48.9583V1.04167C50.2746 0.416667 49.7538 0 49.233 0ZM48.1913 38.5417C48.1913 39.0625 47.6705 39.5833 47.1496 39.5833H3.39963C2.87879 39.5833 2.35796 39.0625 2.35796 38.5417V3.125C2.35796 2.60417 2.87879 2.08333 3.39963 2.08333H47.1496C47.6705 2.08333 48.1913 2.60417 48.1913 3.125V38.5417Z"
          fill="#5D6D7E"
        />
        <path
          d="M17.6706 18.8543C18.0872 18.3334 18.9206 18.3334 19.3372 18.8543L33.0872 37.5001H4.02473L11.3164 27.6043L17.6706 18.8543Z"
          fill="#5D6D7E"
        />
        <path
          d="M34.4413 26.7709C34.858 26.3542 35.483 26.3542 35.8996 26.7709L46.6288 37.5H23.7121L34.4413 26.7709Z"
          fill="#5D6D7E"
        />
        <path
          d="M10.6913 13.5417C12.9925 13.5417 14.858 11.6762 14.858 9.375C14.858 7.07381 12.9925 5.20833 10.6913 5.20833C8.39011 5.20833 6.52463 7.07381 6.52463 9.375C6.52463 11.6762 8.39011 13.5417 10.6913 13.5417Z"
          fill="#5D6D7E"
        />
      </svg>
    </svg>
  )
);

export default Image;
