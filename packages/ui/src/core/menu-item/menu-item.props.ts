import type { PropsWithChildren } from 'react';
import { IconProps } from '@scaleflex/icons/icon.props';

import type { Values } from '../../utils/types';
import type { MenuProps } from '../menu';
import { Size } from './types';

export type MenuItemSizeType = Values<typeof Size>;

export type MenuItemListType = {
  key: string;
  content: string | React.ReactNode | ((props: object) => React.ReactNode);
  prefix?: string | React.ReactNode | ((props: object) => React.ReactNode);
  subList?: MenuItemListType[];
  suffix?: string | React.ReactNode | ((props: object) => React.ReactNode);
  onClick?: (props: object) => void;
  disabled?: boolean;
  active?: boolean;
  subMenuProps?: MenuProps;
  className?: string;
  disableHover?: boolean;
};

export interface MenuItemIconProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  size?: MenuItemSizeType;
  disabled?: boolean;
  children: React.ReactNode | ((props: IconProps) => React.ReactNode);
}

export type MenuItemActionsProps = MenuItemIconProps;

export interface MenuItemProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  size?: MenuItemSizeType;
  icon?: React.ReactNode;
  active?: boolean;
  noOptionsText?: boolean;
  disabled?: boolean;
  value?: string | number | boolean | null;
  list?: MenuItemListType[] | null | undefined;
  depth?: number | undefined;
  disableHover?: boolean;
  isFocused?: boolean;
  enableScrollIntoView?: boolean;
}
