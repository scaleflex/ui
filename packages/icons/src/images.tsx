import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Images = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g clipPath="url(#clip0)">
        <path
          d="M49.355 1H6.84812C6.19079 1 5.75256 1.43824 5.75256 2.09556V9.10703H7.94361V3.19112H48.0403V41.7541H42.3435V43.9452H49.1358C49.7931 43.9452 50.2314 43.5069 50.2314 42.8496V2.09556C50.4505 1.43824 49.7932 1 49.355 1Z"
          fill={color}
        />
        <path
          d="M43.6582 6.91586H1.37046C0.713139 6.91586 0.274902 7.3541 0.274902 8.01142V48.5464C0.274902 49.2037 0.713139 49.6419 1.37046 49.6419H43.6582C44.3156 49.6419 44.7538 49.2037 44.7538 48.5464V8.01142C44.7538 7.3541 44.3156 6.91586 43.6582 6.91586ZM42.5627 9.10698V41.9732L33.7985 31.0177C33.1411 30.3604 31.8265 30.3604 31.1692 31.0177L25.0342 38.6865L22.4049 34.9617L15.8316 25.9782C15.3934 25.3209 14.0788 25.3209 13.4214 25.9782L6.8482 34.9617L2.02785 41.754V9.10692L42.5627 9.10698Z"
          fill={color}
        />
        <path
          d="M36.8664 19.4051C36.8664 21.8253 34.9044 23.7872 32.4842 23.7872C30.064 23.7872 28.102 21.8253 28.102 19.4051C28.102 16.9848 30.064 15.0229 32.4842 15.0229C34.9044 15.0229 36.8664 16.9848 36.8664 19.4051Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="50" height="50" fill="white" transform="translate(0.274902)" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Images;
