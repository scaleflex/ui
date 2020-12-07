import type { Values } from '@sfx-ui/utils/types';
import { Size } from './types';

export type MenuItemPropsSize = Values<typeof Size>;

export interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: MenuItemPropsSize;
  icon?: React.ReactNode;
  active?: boolean;
}
