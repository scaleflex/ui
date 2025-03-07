import React from 'react';
import type { IconProps } from './icon.props';

export const Meta = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M34.405 0.1066V13.0064H47.6246L34.405 0.1066Z" fill={color} />
    <path
      d="M32.3794 15.032V0H4.44762C3.80796 0 3.2749 0.533039 3.2749 1.1727V48.8273C3.2749 49.4669 3.80796 50 4.44762 50H46.3453C46.9849 50 47.518 49.4669 47.518 48.8273V14.9254H32.3794V15.032ZM19.4796 29.3177L12.6566 31.7697L19.4796 34.2217V37.5266L9.13844 33.1556V30.3838L19.4796 26.0128V29.3177ZM23.3175 40.6183H20.7589L27.1555 21.6418H29.7141L23.3175 40.6183ZM41.9743 33.1556L31.5265 37.5266V34.2217L38.4561 31.7697L31.5265 29.3177V26.0128L41.9743 30.3838V33.1556Z"
      fill={color}
    />
  </svg>
);

export default Meta;
