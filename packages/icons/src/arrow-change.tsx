import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ArrowChange = intrinsicComponent<IconProps, SVGSVGElement>(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13.9993C0 13.1866 0.658405 12.5277 1.47059 12.5277L45.2274 12.5288L38.8675 5.45676C38.3242 4.85262 38.3731 3.9221 38.9768 3.37839C39.5805 2.83468 40.5103 2.88367 41.0537 3.48782L49.6225 13.0161C50.1258 13.5758 50.1258 14.4254 49.6225 14.9851L41.0537 24.5134C40.5103 25.1175 39.5805 25.1665 38.9768 24.6228C38.3731 24.0791 38.3242 23.1486 38.8675 22.5445L45.2276 15.4722L1.47059 15.471C0.658405 15.471 0 14.8121 0 13.9993Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 36.0019C50 36.8147 49.3416 37.4735 48.5294 37.4735L4.77262 37.4724L11.1325 44.5445C11.6758 45.1486 11.6269 46.0791 11.0232 46.6228C10.4195 47.1665 9.48965 47.1175 8.94634 46.5134L0.377487 36.9851C-0.125828 36.4254 -0.125828 35.5758 0.377487 35.0161L8.94634 25.4878C9.48965 24.8837 10.4195 24.8347 11.0232 25.3784C11.6269 25.9221 11.6758 26.8526 11.1325 27.4568L4.77239 34.5291L48.5294 34.5302C49.3416 34.5302 50 35.1891 50 36.0019Z"
        fill={color}
      />
    </svg>
  )
);

export default ArrowChange;
