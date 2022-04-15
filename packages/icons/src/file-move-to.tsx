import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const FileMoveTo = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <path
        d="M24.0763 12.4224V0H0.991371C0.473773 0 0.0596924 0.414079 0.0596924 0.931677V49.0683C0.0596924 49.5859 0.473773 50 0.991371 50H35.6705C36.1881 50 36.6021 49.5859 36.6021 49.0683V37.8377H22.9856C21.7199 37.8377 20.6124 36.7302 20.6124 35.4645L20.6124 25.9717C20.6124 24.706 21.7199 23.5985 22.9856 23.5985H36.6021V12.4224H24.0763Z"
        fill={color}
      />
      <path d="M25.7326 0V10.6625H36.6021L25.7326 0Z" fill={color} />
      <path
        d="M38.9795 23.0896C38.9795 22.654 39.2699 22.2185 39.6328 22.0733C40.0683 21.9282 40.5039 21.9282 40.8668 22.3637L49.5774 29.9855C49.7952 30.2032 49.9403 30.4936 49.9403 30.784C49.9403 31.0743 49.7952 31.3647 49.5774 31.5824L40.8668 39.2042C40.5764 39.422 40.0683 39.4946 39.7054 39.3494C39.2698 39.1316 39.0521 38.7687 39.0521 38.3332V33.9778H24.8973C24.3166 33.9778 23.8085 33.4697 23.8085 32.889V28.5337C23.8085 27.953 24.3166 27.4449 24.8973 27.4449H38.9795V23.0896Z"
        fill={color}
      />
    </svg>
  )
);

export default FileMoveTo;
