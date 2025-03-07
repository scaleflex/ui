import React from 'react';
import type { IconProps } from './icon.props';

export const Slash = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M4.52807 15.0584L10.1557 0.441379C10.2586 0.176552 10.5161 0 10.803 0H10.8251C11.3106 0 11.6416 0.485518 11.4724 0.94161L5.82278 15.5586C5.7198 15.8234 5.46232 16 5.17543 16C4.68255 16 4.35152 15.5071 4.52807 15.0584V15.0584Z"
      fill={color}
    />
  </svg>
);

export default Slash;
