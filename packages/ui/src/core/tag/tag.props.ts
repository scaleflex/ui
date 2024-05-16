import { MouseEvent } from 'react';

import type { Values } from '../../utils/types';
import { Size, Type } from './types';

export type TagSizeType = Values<typeof Size>;
export type TagTypesType = Values<typeof Type>;

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: TagSizeType;
  type?: TagTypesType;
  crossIcon?: boolean;
  startIcon?: React.ReactNode;
  onRemove?: (index: number, event: MouseEvent<SVGSVGElement>) => void;
  onSelect?: (event: MouseEvent<HTMLDivElement>) => void;
  tagIndex?: number;
}
