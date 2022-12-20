import type { Values } from '../../utils/types';
import { ButtonSize, IconButtonColor } from '../../utils/types';

export type IconButtonSizeType = Values<typeof ButtonSize>;
export type IconButtonColorType = Values<typeof IconButtonColor>;

export interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: IconButtonSizeType;
  color?: IconButtonColorType;
  disabled?: boolean;
  active?: boolean;
  children: React.ReactNode | ((props: IconProps) => React.ReactNode);
}
