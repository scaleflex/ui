import type { Values } from '../../utils/types';
import { Padding, Size } from '../table-cell/types';

export type TableCellPadding = Values<typeof Padding>;
export type TableCellSize = Values<typeof Size>;

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
  padding?: TableCellPadding;
  size?: TableCellSize;
}
