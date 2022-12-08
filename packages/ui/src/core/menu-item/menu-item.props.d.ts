import type { PropsWithChildren } from 'react';
import type { Values } from '../../utils/types';
import type { MenuProps } from '../menu';
import { Size } from './types';

export type MenuItemSizeType = Values<typeof Size>;

export type MenuItemListType = {
  key: string;
  content: string | React.ReactNode;
  prefix?: string | React.ReactNode | undefined;
  subList?: MenuItemListType[];
  suffix?: string | React.ReactNode | undefined;
  onClick?: func | undefined;
  disabled?: boolean;
  active?: boolean;
  subMenuProps?: MenuProps;
  className?: string;
  disableHover?: boolean;
};
export interface MenuItemIconProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  size?: MenuItemSizeType;
}

export type MenuItemActionsProps = MenuItemIconProps;

export interface MenuItemProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  size?: MenuItemSizeType;
  icon?: React.ReactNode;
  active?: boolean;
  noOptionsText?: boolean;
  disabled?: boolean;
  value?: string | number | null;
  list?: MenuItemListType[] | null | undefined;
  depth?: number | undefined;
  disableHover?: boolean;
  enableScrollIntoView?: boolean;
}
