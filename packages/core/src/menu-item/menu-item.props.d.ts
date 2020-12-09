import type { PropsWithChildren } from 'react';
import type { Values } from '@sfx-ui/utils/types';
import { Size } from './types';

export type MenuItemPropsSize = Values<typeof Size>;

export interface MenuItemIconProps
  extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  size?: MenuItemPropsSize;
}

export interface MenuItemActionsProps extends MenuItemIconProps {}

export interface MenuItemProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  size?: MenuItemPropsSize;
  icon?: React.ReactNode;
  active?: boolean;
  value?: string | number | null;
}
