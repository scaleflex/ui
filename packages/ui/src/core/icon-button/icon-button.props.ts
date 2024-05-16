import { IconProps } from '@scaleflex/icons/icon.props';

import type { Values } from '../../utils/types';
// TODO: move types IconButton and Button Files instead of utils
import { ButtonSize, IconButtonColor } from '../../utils/types';

export type IconButtonSizeType = Values<typeof ButtonSize>;
export type IconButtonColorType = Values<typeof IconButtonColor>;

export interface IconButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'children'> {
  size?: IconButtonSizeType;
  color?: IconButtonColorType;
  disabled?: boolean;
  active?: boolean;
  children: React.ReactNode | ((props: IconProps) => React.ReactNode);
}
