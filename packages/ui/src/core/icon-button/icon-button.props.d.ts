import type { Values } from '../../utils/types';
import { ButtonSize, ButtonColor } from '../../utils/types';

export type IconButtonSizeType = Values<typeof ButtonSize>;
export type IconButtonColorType = Values<typeof ButtonColor>;

export interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: IconButtonSizeType;
  color?: IconButtonColorType;
  disabled?: boolean;
  children: React.ReactNode | ((props: IconProps) => React.ReactNode);
}
