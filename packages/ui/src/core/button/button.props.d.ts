import type { PropsWithChildren } from 'react';
import type { IconProps } from '@scaleflex/icons/icon.props';
import type { Values } from '../../utils/types';
import { ButtonSize, ButtonColor } from '../../utils/types';

export type ButtonSizeType = Values<typeof ButtonSize>;
export type ButtonColorType = Values<typeof ButtonColor>;

export interface ButtonProps extends PropsWithChildren, React.HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeType;
  color?: ButtonColorType;
  icon?: React.ReactNode | ((props: IconProps) => React.ReactNode);
  badge?: React.ReactNode;
  loading?: boolean;
  $loading?: boolean;
  disabled?: boolean;
}
