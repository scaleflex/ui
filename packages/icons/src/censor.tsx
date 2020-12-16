import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Censor = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
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
      <path d="M50.2754 25.076C50.2754 29.8718 40.0104 40.1521 25.3323 40.1521C11.0368 40.1521 0.312696 30.0249 0.312696 25.076C0.312696 20.1272 11.0368 10 25.2558 10C40.0869 10 50.2754 20.0507 50.2754 25.076ZM25.3323 12.7448C18.7152 12.7448 13.3174 18.2242 13.3174 25.0812C13.3174 31.933 18.7152 37.4124 25.3323 37.4124C31.9494 37.4124 37.3472 31.933 37.3472 25.0812C37.3472 18.3008 31.9494 12.7448 25.3323 12.7448ZM25.3323 17.2345C21.0722 17.2345 17.654 20.7344 17.654 25.076C17.654 29.4177 21.0773 32.9176 25.3323 32.9176C29.5924 32.9176 33.0106 29.4126 33.0106 25.076C32.9392 20.7344 29.5159 17.2345 25.3323 17.2345Z" fill={color} />
      <path d="M2.76666 12.0969L49.4591 34.6982C50.1223 35.0196 50.3978 35.8104 50.0764 36.4737L49.4948 37.6726C49.1734 38.3358 48.3775 38.6113 47.7193 38.2899L1.02692 15.6886C0.363679 15.3672 0.0881775 14.5713 0.409596 13.9132L0.99121 12.7193C1.30753 12.0561 2.10342 11.7806 2.76666 12.0969Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="50" height="50" fill="white" transform="translate(0.275391)" />
      </clipPath>
    </defs>
  </svg>
));

export default Censor;
