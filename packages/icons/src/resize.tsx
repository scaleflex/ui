import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Resize = intrinsicComponent<IconProps, SVGSVGElement>(
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
        <path d="M47.3203 47.0454H45.7294V49.9999H50.0476V45.6818H47.3203V47.0454Z" fill={color} />
        <path d="M34.1385 47.0454H40.0477V49.7727H34.1385V47.0454Z" fill={color} />
        <path d="M22.3203 47.0454H28.2294V49.7727H22.3203V47.0454Z" fill={color} />
        <path d="M0.274902 10.2273H3.00217V16.1364H0.274902V10.2273Z" fill={color} />
        <path d="M0.274902 22.0455H3.00217V27.9546H0.274902V22.0455Z" fill={color} />
        <path d="M3.22942 2.95459H4.59306V6.60392e-05H0.274902V4.31822H3.22942V2.95459Z" fill={color} />
        <path d="M10.5022 0H16.4113V2.72727H10.5022V0Z" fill={color} />
        <path d="M34.1385 0H40.0477V2.72727H34.1385V0Z" fill={color} />
        <path d="M22.3203 0H28.2294V2.72727H22.3203V0Z" fill={color} />
        <path d="M45.7294 0V2.95452H47.3203V4.31816H50.0476V0H45.7294Z" fill={color} />
        <path d="M47.3203 22.0455H50.0476V27.9546H47.3203V22.0455Z" fill={color} />
        <path d="M47.3203 33.8636H50.0476V39.7727H47.3203V33.8636Z" fill={color} />
        <path d="M47.3203 10.2273H50.0476V16.1364H47.3203V10.2273Z" fill={color} />
        <path
          d="M43.684 6.59093H32.7749L37.3204 11.1364L21.184 27.0455L23.0022 28.8637L39.1386 12.9546L43.6841 17.5001L43.684 6.59093Z"
          fill={color}
        />
        <path d="M0.274902 50H4.59306V49.7728H10.5022V50H16.4113V49.7728H20.7294V29.5455H0.274902V50Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="50" height="50" fill="white" transform="translate(0.274902)" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Resize;
