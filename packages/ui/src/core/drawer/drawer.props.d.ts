import type { PropsWithChildren } from 'react';
import type { Values } from '../../utils/types';
import { FontVariant } from '../../utils/types/typography/font-variant';
import { AccordionProps } from '../accordion';

export type Fonttype = Values<typeof FontVariant>;

export interface DrawerProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  hideBackdrop?: boolean;
  collpased?: boolean;
  top?: number;
  iconsSize?: number;
  onClose?: () => void;
}

export interface DrawerItemProps extends PropsWithChildren, React.HTMLAttributes<HTMLLIElement> {
  selected?: boolean;
}

export interface DrawerItemButtonProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
}

export interface DrawerAccordionProps extends AccordionProps, React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
}

export interface DrawerItemTextProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  font?: Fonttype;
}

export interface DrawerListProps extends PropsWithChildren, React.HTMLAttributes<HTMLUListElement> {
  font?: Fonttype;
}

export interface DrawerIconProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}
