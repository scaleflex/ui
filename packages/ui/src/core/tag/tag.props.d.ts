import type { Values } from '../../utils/types';
import { Size, Type } from './types';

export type TagSizeType = Values<typeof Size>;
export type TagTypesType = Values<typeof Type>;

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: TagSizeType;
  type?: TagTypesType;
  onRemove?: (index: number, event?) => void;
  onSelect?: (event) => void;
  tagIndex?: number;
}
