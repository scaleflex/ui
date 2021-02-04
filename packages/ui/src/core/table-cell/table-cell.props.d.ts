
import type { Values } from '../../utils/types';
import { Align, Padding, Size } from './types';

export type TableCellAlign = Values<typeof Align>;
export type TableCellPadding = Values<typeof Padding>;
export type TableCellSize = Values<typeof Size>;

export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  align?: TableCellAlign;
  padding?: TableCellPadding | string;
  size?: TableCellSize | string,
  component?: React.ReactNode | string
  scope?: string
}
