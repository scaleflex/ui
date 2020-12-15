import type { PropsWithChildren } from 'react';
import type { Values } from '@sfx-ui/utils/types';
import { Size, Color } from './types';

export type ButtonSizeType = Values<typeof Size>;
export type ButtonColorType = Values<typeof Color>;

export interface ButtonProps extends PropsWithChildren, React.HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeType;
  color?: ButtonColorType;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
}
