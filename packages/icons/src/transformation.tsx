import React from 'react';
import type { IconProps } from './icon.props';

export const Transformation = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M0 0.500489C0 0.224346 0.223858 0.000488281 0.5 0.000488281H13.7857C14.0619 0.000488281 14.2857 0.224346 14.2857 0.500488V4.64331H35.7143V0.500489C35.7143 0.224346 35.9382 0.000488281 36.2143 0.000488281H49.5C49.7761 0.000488281 50 0.224346 50 0.500488V13.7862C50 14.0623 49.7761 14.2862 49.5 14.2862H45.3582V35.7148H49.5C49.7761 35.7148 50 35.9387 50 36.2148V49.5006C50 49.7767 49.7761 50.0006 49.5 50.0006H36.2143C35.9382 50.0006 35.7143 49.7767 35.7143 49.5006V45.3577H14.2857V49.5006C14.2857 49.7767 14.0619 50.0006 13.7857 50.0006H0.5C0.223858 50.0006 0 49.7767 0 49.5006V36.2148C0 35.9387 0.223858 35.7148 0.5 35.7148H4.64389V14.2862H0.5C0.223858 14.2862 0 14.0623 0 13.7862V0.500489ZM35.7143 40.3577V36.2148C35.7143 35.9387 35.9382 35.7148 36.2143 35.7148H40.3582V14.2862H36.2143C35.9382 14.2862 35.7143 14.0623 35.7143 13.7862V9.64331H14.2857V13.7862C14.2857 14.0623 14.0619 14.2862 13.7857 14.2862H9.64389V35.7148H13.7857C14.0619 35.7148 14.2857 35.9387 14.2857 36.2148V40.3577H35.7143Z"
      fill={color}
    />
  </svg>
);

export default Transformation;
