import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const NoFolders = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size / 2.5}
      viewBox="0 0 150 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M113 9.79564V50.3092C113 51.0598 112.379 51.6603 111.603 51.6603H108.64C108.689 49.943 108.689 46.3635 108.689 46.0659L108.689 14.7741C108.689 13.492 107.615 12.4529 106.289 12.4529L103.573 12.4529C102.987 12.4529 102.822 12.4529 102.917 12.4529L68.8138 12.4523L68.1467 10.8034C67.2456 8.54112 65.9289 7.05108 64.3058 6.24663C62.7781 5.4895 61.3568 5.548 60.8018 5.57084L59.8194 5.57256L59.3229 5.57606L45.185 5.57609V1.36684C45.185 0.616281 45.8057 0.0158316 46.5816 0.0158316H67.8417C67.9048 0.0158316 67.9792 0.0128542 68.0634 0.00948205C69.0153 -0.0286211 71.2267 -0.117149 72.6524 3.4684L74.0374 6.89222H109.999C111.656 6.89222 113 8.19293 113 9.79564Z"
        fill={color}
      />
      <path
        d="M105.815 16.583C105.815 15.8324 105.194 15.232 104.418 15.232L66.8524 15.232L65.4674 11.8081C64.0418 8.22259 61.8303 8.31112 60.8784 8.34923C60.7942 8.3526 55.528 8.35558 55.4649 8.35558H39.3966C38.6207 8.35558 38 8.95603 38 9.70658V58.649C38 59.3996 38.6207 60 39.3966 60H104.418C105.194 60 105.815 59.3996 105.815 58.649L105.815 16.583Z"
        fill={color}
      />
      <path
        d="M136.792 10.4151C136.792 9.63356 137.426 9 138.208 9H148.585C149.366 9 150 9.63356 150 10.4151C150 11.1966 149.366 11.8302 148.585 11.8302H138.208C137.426 11.8302 136.792 11.1966 136.792 10.4151Z"
        fill={color}
      />
      <path
        d="M127.83 19.3771C127.048 19.3771 126.415 20.0107 126.415 20.7922C126.415 21.5737 127.048 22.2073 127.83 22.2073H143.868C144.649 22.2073 145.283 21.5737 145.283 20.7922C145.283 20.0107 144.649 19.3771 143.868 19.3771H127.83Z"
        fill={color}
      />
      <path
        d="M9.43384 49.0943C9.43384 48.3128 10.0674 47.6792 10.8489 47.6792H21.2263C22.0078 47.6792 22.6414 48.3128 22.6414 49.0943C22.6414 49.8759 22.0078 50.5094 21.2263 50.5094H10.8489C10.0674 50.5094 9.43384 49.8759 9.43384 49.0943Z"
        fill={color}
      />
      <path
        d="M1.4151 37.3015C0.633563 37.3015 0 37.9351 0 38.7166C0 39.4981 0.633563 40.1317 1.4151 40.1317H17.4528C18.2343 40.1317 18.8679 39.4981 18.8679 38.7166C18.8679 37.9351 18.2343 37.3015 17.4528 37.3015H1.4151Z"
        fill={color}
      />
    </svg>
  )
);

export default NoFolders;
