import type { HTMLAttributes } from 'react';

import type { IntrinsicComponent, StylableComponent } from '@sfx-ui/utils/types';

export interface IconProps extends IntrinsicComponent<HTMLAttributes<SVGSVGElement>>, StylableComponent {
  size?: number;
  width?: string | number;
  height?: string | number;
  color?: string;
}
