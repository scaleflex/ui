import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const NoMembers = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M29.9593 10.7043C28.7516 11.9102 27.2771 12.5258 25.5712 12.5258C23.8653 12.5258 22.3858 11.9152 21.1781 10.7043C19.9754 9.49337 19.3615 8.01501 19.3615 6.30457C19.3615 4.59412 19.9754 3.11072 21.1831 1.90483C22.3909 0.698934 23.8653 0.083374 25.5712 0.083374C27.2771 0.083374 28.7516 0.693888 29.9593 1.90483C31.162 3.11576 31.776 4.59412 31.776 6.30457C31.776 8.01501 31.1671 9.49337 29.9593 10.7043Z"
        fill={color}
      />
      <path
        d="M36.2194 18.313C36.32 18.8933 36.3905 19.4432 36.4257 19.9478C36.4609 20.4423 36.4811 20.9519 36.4811 21.4766C36.4811 22.8238 36.0533 23.9187 35.2079 24.7209C34.3726 25.5131 33.2705 25.9167 31.9319 25.9167H19.5275C18.1889 25.9167 17.0869 25.5131 16.2515 24.7159C15.4061 23.9136 14.9784 22.8187 14.9784 21.4716C14.9784 20.9569 14.9935 20.4423 15.0287 19.9478C15.0589 19.4432 15.1293 18.8933 15.235 18.313C15.3407 17.7277 15.4766 17.1778 15.6376 16.6732C15.8037 16.1535 16.0301 15.6389 16.3119 15.1444C16.6038 14.6298 16.946 14.1858 17.3284 13.8174C17.731 13.434 18.2191 13.1262 18.7878 12.8991C19.3514 12.6771 19.9804 12.5611 20.6497 12.5611C20.9114 12.5611 21.163 12.667 21.6561 12.9899C21.9631 13.1918 22.3154 13.4188 22.7079 13.6711C23.045 13.8881 23.503 14.0899 24.0666 14.2715C24.6151 14.4481 25.1787 14.5389 25.7272 14.5389C26.2757 14.5389 26.8393 14.4481 27.3878 14.2715C27.9514 14.0899 28.4094 13.8881 28.7465 13.6711L29.0979 13.4438C29.3545 13.2779 29.5886 13.1266 29.7983 12.9899C30.2864 12.667 30.543 12.5611 30.8047 12.5611C31.474 12.5611 32.103 12.6771 32.6666 12.8991C33.2353 13.1262 33.7234 13.434 34.126 13.8174C34.5084 14.1858 34.8506 14.6298 35.1425 15.1444C35.4243 15.6338 35.6508 16.1535 35.8168 16.6732C35.9779 17.1778 36.1137 17.7277 36.2194 18.313Z"
        fill={color}
      />
      <path
        d="M49.5415 3.15735C49.7947 3.15735 50 3.36601 50 3.62342C50 3.88082 49.7947 4.08949 49.5415 4.08949H44.3456C44.0924 4.08949 43.8871 3.88082 43.8871 3.62342C43.8871 3.36601 44.0924 3.15735 44.3456 3.15735H49.5415Z"
        fill={color}
      />
      <path
        d="M46.4851 6.5752C46.7383 6.5752 46.9436 6.78387 46.9436 7.04127C46.9436 7.29867 46.7383 7.50734 46.4851 7.50734H43.123C42.8698 7.50734 42.6646 7.29867 42.6646 7.04127C42.6646 6.78387 42.8698 6.5752 43.123 6.5752H46.4851Z"
        fill={color}
      />
      <path
        d="M0 17.5082C0 17.2508 0.205264 17.0421 0.45847 17.0421H5.65442C5.90763 17.0421 6.11289 17.2508 6.11289 17.5082C6.11289 17.7656 5.90763 17.9743 5.65442 17.9743H0.45847C0.205264 17.9743 0 17.7656 0 17.5082Z"
        fill={color}
      />
      <path
        d="M3.05641 20.9261C3.05641 20.6687 3.26167 20.46 3.51488 20.46H6.87696C7.13017 20.46 7.33543 20.6687 7.33543 20.9261C7.33543 21.1835 7.13017 21.3921 6.87697 21.3921H3.51488C3.26167 21.3921 3.05641 21.1835 3.05641 20.9261Z"
        fill={color}
      />
    </svg>
  )
);

export default NoMembers;