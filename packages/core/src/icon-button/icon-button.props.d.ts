import type { Values } from '@sfx-ui/utils/types';
import { Size, Color } from './types';

export type IconButtonSizeType = Values<typeof Size>;
export type IconButtonColorType = Values<typeof Color>;

export interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: IconButtonSizeType;
  color?: IconButtonColorType;
  children: React.ReactNode;
}
