import { IconProps } from '@scaleflex/icons/icon.props';
import type { Values } from '../../utils/types';

export const Size = {
  Sm: 'sm',
  Md: 'md',
} as const;

export type IconButtonTableSizeType = Values<typeof Size>;

export interface IconButtonTableProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'children'> {
  size?: IconButtonTableSizeType;
  children: React.ReactNode | ((props: IconProps) => React.ReactNode);
  disabled?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}
