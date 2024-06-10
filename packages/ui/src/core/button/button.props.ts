import type { PropsWithChildren } from 'react';
import type { IconProps } from '@scaleflex/icons/icon.props';
import type { Values } from '../../utils/types';
import { ButtonSize, ButtonColor } from '../../utils/types';
import { ButtonType, SideBar } from './types';

export type ButtonSizeType = Values<typeof ButtonSize>;
export type ButtonColorType = Values<typeof ButtonColor>;
export type ButtonType = Values<typeof ButtonType>;
export type SideBarType = Values<typeof SideBar>;

export interface ButtonProps extends PropsWithChildren, React.HTMLAttributes<HTMLButtonElement> {
  /** 
   *  'xs' | 'sm' | 'md' | 'lg'
  */
  size?: ButtonSizeType;
  /** 
   * 'primary' | 'secondary' | 'basic' | 'link-primary' | 'link-secondary' | 'link-basic-primary' | link-basic-secondary' | 'error-primary' 
   *  | 'error-secondary' | 'error-basic' | 'warning-primary' | 'warning-secondary' | 'warning-basic'
  */
  color?: ButtonColorType;
  startIcon?: React.ReactNode | ((props: IconProps) => React.ReactNode);
  endIcon?: React.ReactNode | ((props: IconProps) => React.ReactNode);
  badge?: React.ReactNode;
  buttonType?: ButtonType;
  active?: boolean;
  loading?: boolean;
  disabled?: boolean;
  sideBarType?: SideBarType;
}
