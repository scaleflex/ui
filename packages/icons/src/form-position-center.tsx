import React from 'react';
import type { IconProps } from './icon.props';

export const FormPositionCenter = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 68 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <rect x="0.5" y="0.5" width="67" height="47" rx="3.5" fill={color} fillOpacity="0.18" />
    <rect x="0.5" y="0.5" width="67" height="47" rx="3.5" stroke={color} />
    <rect x="22.5" y="19" width="23" height="3" rx="0.5" stroke={color} />
    <rect x="26.5" y="26" width="15" height="3" rx="0.5" fill={color} stroke={color} />
  </svg>
);

export default FormPositionCenter;
