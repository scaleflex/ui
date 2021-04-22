import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const LinkVertical = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g clipPath="url(#clip0)">
        <path
          d="M20.9852 18.2272C21.5778 18.2272 22.0597 17.7453 22.0597 17.1527V17.0745C22.0597 16.4819 21.5778 16 20.9852 16H6.79468C6.79468 16 0.217168 16.6512 0.27578 24.6159C0.334392 32.5806 7.1724 32.8802 7.1724 32.8802H22.5221C22.5221 32.8802 27.7516 32.7694 28.9954 26.7064C29.1192 26.1138 28.6698 25.5602 28.0642 25.5602C27.4715 25.5602 26.957 25.977 26.8398 26.5566C26.5924 27.7744 25.8109 29.7412 23.3622 30.2752L7.06169 30.197C7.06169 30.197 2.04064 29.8975 2.71793 23.6521C3.39522 17.4067 7.60873 18.2207 7.60873 18.2207H20.9852V18.2272Z"
          fill={color}
        />
        <path
          d="M21.376 24.707C21.3499 25.2931 21.8253 25.7816 22.4115 25.7816H22.4831C23.0757 25.7816 23.5837 25.3452 23.6618 24.7526C23.8833 23.1245 24.8015 20.1418 28.4745 20.2721L42.9516 20.4479C42.9516 20.4479 47.3995 20.5391 47.8424 26.6021C48.2852 32.6652 42.9516 32.4503 42.9516 32.4503H29.7509C29.0606 32.4503 28.5006 33.0103 28.5006 33.7006C28.5006 34.3584 29.0346 34.8989 29.6988 34.8989H43.173C43.173 34.8989 50.0696 35.1399 50.2715 26.3807C50.4734 17.6215 42.7302 18.0057 42.7302 18.0057L27.8884 17.8104C27.8819 17.8104 21.656 18.5788 21.376 24.707Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="50" height="50" fill="white" transform="translate(0.275391)" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default LinkVertical;