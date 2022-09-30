import type { Values } from '../../utils/types';
import { Size } from './types';

export type TabSizeType = Values<typeof Size>;

export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: TabSizeType;
  icon?: ReactNode;
  label?: ReactNode;
  badge?: React.ReactNode;
  value?: string | number;
  active?: boolean;
  notification?: string;
  disabled?: boolean;
}
