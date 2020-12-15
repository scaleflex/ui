import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Redo = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size * (51 / 50)}
    height={size}
    viewBox="0 0 51 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M49.7275 22.368L27.6472 4.30235C27.2822 3.93737 26.7347 3.93737 26.1873 4.11989C25.6399 4.30241 25.4574 4.8498 25.4574 5.39724V14.8863C14.6909 15.2512 7.39169 19.0834 3.55958 26.0176C0.274903 32.0395 0.274902 39.3387 0.274902 44.0833V45.1782C0.274902 45.7256 0.639884 46.2731 1.36979 46.4555C1.55226 46.638 1.55226 46.638 1.73477 46.638C2.28222 46.638 2.6472 46.4555 3.01213 45.9081C10.4939 32.7694 16.5158 32.222 25.4574 32.0395V41.5285C25.4574 42.076 25.8224 42.6234 26.1873 42.8059C26.7347 42.9883 27.2822 42.9883 27.6472 42.6234L49.7275 24.3753C50.0924 24.1928 50.2749 23.6454 50.2749 23.2804C50.2749 23.0979 50.0924 22.733 49.7275 22.368V22.368Z" fill={color} />
  </svg>
));

export default Redo;
