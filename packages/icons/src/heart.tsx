import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Heart = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M36.9937 3C34.2805 3 31.793 3.85977 29.6004 5.55547C27.4983 7.18115 26.0988 9.25176 25.2749 10.7574C24.451 9.25166 23.0515 7.18115 20.9494 5.55547C18.7568 3.85977 16.2693 3 13.5562 3C5.98467 3 0.274902 9.19307 0.274902 17.4057C0.274902 26.2781 7.39824 32.3485 18.182 41.5383C20.0133 43.0989 22.089 44.8679 24.2464 46.7545C24.5308 47.0035 24.896 47.1406 25.2749 47.1406C25.6538 47.1406 26.019 47.0035 26.3034 46.7546C28.461 44.8677 30.5366 43.0988 32.3689 41.5373C43.1516 32.3485 50.2749 26.2781 50.2749 17.4057C50.2749 9.19307 44.5651 3 36.9937 3Z" fill={color} />
  </svg>
));

export default Heart;
