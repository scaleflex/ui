import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Rotate90 = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 52 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M46.4326 40.0282C46.1217 40.5666 45.6098 40.9595 45.0093 41.1204C44.4088 41.2813 43.7691 41.197 43.2307 40.8862C42.6923 40.5754 42.2995 40.0634 42.1386 39.463C41.9777 38.8625 42.0619 38.2227 42.3727 37.6843C45.2819 32.6454 46.0703 26.6571 44.5644 21.0369C43.0584 15.4167 39.3816 10.6249 34.3426 7.71563C25.1427 2.4043 13.7736 4.38306 6.93632 12.1744L14.5457 12.0831H14.5744C15.196 12.0795 15.7937 12.3229 16.2358 12.7599C16.678 13.1969 16.9284 13.7916 16.9321 14.4133C16.9357 15.0349 16.6923 15.6326 16.2553 16.0747C15.8183 16.5169 15.2236 16.7673 14.6019 16.771L2.37222 16.9175H2.34409C2.03391 16.9175 1.72681 16.856 1.44059 16.7364C1.15437 16.6169 0.894721 16.4417 0.676697 16.2211C0.458674 16.0004 0.28661 15.7387 0.170478 15.4511C0.0543471 15.1635 -0.00354164 14.8557 0.000167612 14.5455L0.147346 2.31591C0.151046 2.00811 0.215338 1.70404 0.336549 1.42108C0.457761 1.13812 0.633519 0.881802 0.853788 0.666765C1.07406 0.451728 1.33453 0.282182 1.62032 0.167807C1.90611 0.0534328 2.21164 -0.00353076 2.51944 0.000169355C2.82725 0.00386947 3.13132 0.0681609 3.41428 0.189372C3.69724 0.310584 3.95356 0.486342 4.16859 0.706611C4.38363 0.926881 4.55318 1.18735 4.66755 1.47314C4.78193 1.75894 4.83889 2.06446 4.83519 2.37227L4.77171 7.65586C9.37537 3.16334 15.4496 0.489016 21.8718 0.127065C28.2941 -0.234886 34.6303 1.74001 39.7096 5.6868C44.7889 9.63359 48.2679 15.2855 49.5038 21.5981C50.7397 27.9107 49.6485 34.4574 46.4326 40.0282Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 28C26.6569 28 28 26.6569 28 25C28 23.3431 26.6569 22 25 22C23.3431 22 22 23.3431 22 25C22 26.6569 23.3431 28 25 28ZM25 32C28.866 32 32 28.866 32 25C32 21.134 28.866 18 25 18C21.134 18 18 21.134 18 25C18 28.866 21.134 32 25 32Z"
        fill={color}
      />
    </svg>
  )
);

export default Rotate90;