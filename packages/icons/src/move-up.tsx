import React from 'react';
import type { IconProps } from './icon.props';

export const MoveUp = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 34 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M12.7718 50L12.7721 19.729L0.395508 19.7295L16.9999 0L33.6048 19.7287L21.2276 19.729L21.2274 50H12.7718Z"
      fill={color}
    />
  </svg>
);

export default MoveUp;
