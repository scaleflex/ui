import React from 'react';
import type { IconProps } from './icon.props';

export const MinusOutline = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg ref={ref} width={size} height={size} viewBox="0 0 38 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.835 5.0769L2.16498 5.0769C1.00277 5.0769 0.0606079 4.14726 0.0606079 3.00048C0.060608 1.85371 1.00277 0.924072 2.16498 0.924072L35.835 0.924074C36.9972 0.924074 37.9394 1.85372 37.9394 3.00049C37.9394 4.14726 36.9972 5.0769 35.835 5.0769Z"
      fill={color}
    />
  </svg>
);

export default MinusOutline;
