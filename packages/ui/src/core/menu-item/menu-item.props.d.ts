import type { PropsWithChildren } from 'react';
import type { Values } from '../../utils/types';
import { Size } from './types';

export type MenuItemSizeType = Values<typeof Size>;

export interface MenuItemIconProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  size?: MenuItemSizeType;
}

export interface MenuItemActionsProps extends MenuItemIconProps {}

export interface MenuItemProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  size?: MenuItemSizeType;
  icon?: React.ReactNode;
  active?: boolean;
  value?: string | number | null;
}
