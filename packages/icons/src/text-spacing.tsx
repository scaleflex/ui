import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const TextSpacing = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 48 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.2933 0.992337C4.78145 0.504182 5.57291 0.504182 6.06107 0.992337L9.36044 4.29171C9.8486 4.77987 9.8486 5.57132 9.36044 6.05948C8.87229 6.54763 8.08083 6.54763 7.59267 6.05948L6.42718 4.89399V34.0835L7.59267 32.918C8.08083 32.4298 8.87229 32.4298 9.36044 32.918C9.8486 33.4061 9.8486 34.1976 9.36044 34.6857L6.06107 37.9851C5.82664 38.2195 5.50868 38.3512 5.17714 38.3512C4.84561 38.3512 4.52766 38.2195 4.29324 37.9851L0.994276 34.6857C0.506151 34.1975 0.5062 33.406 0.994386 32.9179C1.48257 32.4298 2.27403 32.4298 2.76215 32.918L3.92718 34.0832V4.89399L2.76169 6.05948C2.27354 6.54763 1.48208 6.54763 0.993924 6.05948C0.505769 5.57132 0.505769 4.77987 0.993924 4.29171L4.2933 0.992337ZM13.1522 8.34164V1.4978H46.309V8.34157H43.3915V7.19831C43.3915 5.5465 42.0497 4.20497 40.3982 4.20497H31.8451V26.0997C31.8451 28.1393 33.5023 29.7962 35.5416 29.7962H36.5072V32.4604H23.0034V29.7962H23.969C26.0085 29.7962 27.6655 28.1393 27.6655 26.0997V4.20503H19.0632C17.4114 4.20503 16.0698 5.54659 16.0698 7.19838V8.34164H13.1522ZM46.993 39.7094C47.4811 39.2212 47.4811 38.4298 46.993 37.9416L43.6936 34.6422C43.2054 34.1541 42.414 34.1541 41.9258 34.6422C41.4377 35.1304 41.4377 35.9218 41.9258 36.41L43.0913 37.5755L15.0767 37.5755L16.2418 36.4105C16.73 35.9223 16.7301 35.1309 16.2419 34.6427C15.7538 34.1545 14.9624 34.1545 14.4742 34.6426L11.1748 37.9416C10.9404 38.176 10.8086 38.4939 10.8086 38.8255C10.8086 39.157 10.9403 39.4749 11.1748 39.7094L14.4741 43.0088C14.9623 43.4969 15.7537 43.4969 16.2419 43.0088C16.73 42.5206 16.73 41.7291 16.2419 41.241L15.0764 40.0755L43.0913 40.0755L41.9258 41.241C41.4377 41.7291 41.4377 42.5206 41.9258 43.0088C42.414 43.4969 43.2054 43.4969 43.6936 43.0088L46.993 39.7094Z"
        fill={color}
      />
    </svg>
  )
);

export default TextSpacing;