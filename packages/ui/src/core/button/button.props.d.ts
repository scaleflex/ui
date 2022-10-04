import type { PropsWithChildren } from 'react';
import type { IconProps } from '@scaleflex/icons/icon.props';
import type { Values } from '../../utils/types';
import { ButtonSize, ButtonColor } from '../../utils/types';
import { ButtonTypes } from './types';

export type ButtonSizeType = Values<typeof ButtonSize>;
export type ButtonColorType = Values<typeof ButtonColor>;
export type ButtonTypes = Values<typeof ButtonTypes>;

export interface ButtonProps extends PropsWithChildren, React.HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeType;
  color?: ButtonColorType;
  icon?: React.ReactNode | ((props: IconProps) => React.ReactNode);
  badge?: React.ReactNode;
  ButtonType?: ButtonTypes;
  active?: boolean;
  loading?: boolean;
  $loading?: boolean;
  disabled?: boolean;
  rightSlide?: boolean;
  leftSlide?: boolean;
}
