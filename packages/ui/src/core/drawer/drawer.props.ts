import type { PropsWithChildren } from 'react';
import { IconProps } from '@scaleflex/icons/icon.props';

import type { Values } from '../../utils/types';
import { FontVariant } from '../../utils/types/typography/font-variant';
import { AccordionProps } from '../accordion';
import { Variant } from './types';

export type FontType = Values<typeof FontVariant>;
export type DrawerVariant = Values<typeof Variant>;

export interface DrawerProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  hideBackdrop?: boolean;
  collapsed?: boolean;
  disablePortal?: boolean;
  top?: number;
  iconsSize?: number;
  collapseButtonLabel?: string;
  persistentDrawerStyles?: object;
  collapseButtonStyle?: React.CSSProperties;
  temproryDrawerStyles?: object; //TODO: fix typo
  variant?: DrawerVariant;
  onClose?: () => void;
  onCollapse?: (collapseState: boolean) => void;
  onCollapseClick?: (collapseState: boolean) => void;
  hideScroll?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

export interface DrawerItemProps extends PropsWithChildren, React.HTMLAttributes<HTMLLIElement> {
  selected?: boolean;
  ref?: React.Ref<HTMLLIElement>;
}

export interface DrawerItemButtonProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

export interface DrawerAccordionProps extends AccordionProps {
  selected?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

export interface DrawerItemTextProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  font?: FontType;
  ref?: React.Ref<HTMLDivElement>;
}

export interface DrawerListProps extends PropsWithChildren, React.HTMLAttributes<HTMLUListElement> {
  font?: FontType;
  ref?: React.Ref<HTMLUListElement>;
}

export interface DrawerIconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  size?: number;
  children: React.ReactNode | ((props: IconProps) => React.ReactNode);
  ref?: React.Ref<HTMLSpanElement>;
}
