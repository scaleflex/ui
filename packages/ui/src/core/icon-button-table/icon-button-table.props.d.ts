import type { Values } from '../../utils/types';
import { Size } from './types';

export type IconButtonTableSizeType = Values<typeof Size>;

export interface IconButtonTableProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: IconButtonTableSizeType;
}
