import React from 'react';
import type { IconProps } from './icon.props';

export const TwoPersons = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M42.483 26.4831H33.5847C29.5593 26.4831 26.2754 29.767 26.2754 33.7924V48.517C26.2754 49.3644 26.911 50 27.7584 50H48.3093C49.1568 50 49.7923 49.3644 49.7923 48.517V33.7924C49.6864 29.767 46.4025 26.4831 42.483 26.4831Z"
      fill={color}
    />
    <path
      d="M37.9279 7.20339C33.0551 7.20339 29.1356 11.1229 29.1356 15.9958C29.1356 19.2797 30.9364 22.1398 33.5847 23.6229C34.8559 24.3644 36.339 24.7881 37.822 24.7881C39.3051 24.7881 40.7881 24.3644 42.0593 23.6229C44.7076 22.1398 46.5084 19.2797 46.5084 15.9958C46.7203 11.1229 42.8008 7.20339 37.9279 7.20339Z"
      fill={color}
    />
    <path
      d="M17.589 19.2797H8.58471C4.55929 19.2797 1.27539 22.5636 1.27539 26.589V41.3136C1.27539 42.161 1.91098 42.7966 2.75844 42.7966H23.3093C24.1567 42.7966 24.7923 42.161 24.7923 41.3136V26.589C24.7923 22.5636 21.5084 19.2797 17.589 19.2797Z"
      fill={color}
    />
    <path
      d="M13.1398 0C8.26692 0 4.34742 3.91949 4.34742 8.79237C4.34742 12.0763 6.14827 14.9364 8.79658 16.4195C10.0678 17.161 11.5508 17.5847 13.0339 17.5847C14.6228 17.5847 16 17.161 17.2712 16.4195C19.9195 14.9364 21.7203 12.0763 21.7203 8.79237C21.8262 3.91949 17.9067 0 13.1398 0Z"
      fill={color}
    />
  </svg>
);

export default TwoPersons;
