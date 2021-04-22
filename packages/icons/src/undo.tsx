import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Undo = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 40 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M39.5112 31.2036C39.5112 41.568 31.0785 50 20.7148 50H14.0613C12.9587 50 12.0652 49.1066 12.0652 48.004V47.3386C12.0652 46.2359 12.9586 45.3425 14.0613 45.3425H20.7148C28.5107 45.3425 34.8537 38.9995 34.8537 31.2036C34.8537 23.4078 28.5107 17.0648 20.7148 17.0648H8.4394L16.8935 25.5189C17.8015 26.4266 17.8015 27.9042 16.8935 28.8119C16.0124 29.6923 14.479 29.691 13.5999 28.8119L1.17111 16.3828C0.731285 15.943 0.488892 15.3581 0.488892 14.7359C0.488892 14.1142 0.731285 13.529 1.17111 13.0894L13.6006 0.65976C14.4797 -0.220001 16.0144 -0.220001 16.8936 0.65976C17.8016 1.56722 17.8016 3.04511 16.8936 3.95246L8.43951 12.4072H20.7148C31.0785 12.4072 39.5112 20.8395 39.5112 31.2036Z"
        fill={color}
      />
    </svg>
  )
);

export default Undo;
