import type { HTMLAttributes } from 'react';

import type { IntrinsicComponent, StylableComponent } from './utils/types';

export interface IconProps extends IntrinsicComponent<HTMLAttributes<SVGSVGElement>>, StylableComponent {
  size?: number;
  width?: string | number;
  height?: string | number;
  color?: string;
  color2?: string;
  stroke?: string;
  stroke2?: string;
  viewBox?: string;
}
