import type { PropsWithChildren } from 'react';
import type { Values } from '@sfx-ui/utils/types';
import { Size, Color, Status } from './types';

export type ButtonSizeType = Values<typeof Size>;
export type ButtonColorType = Values<typeof Color>;
export type ButtonStatusType = Values<typeof Status>;

export interface ButtonProps extends PropsWithChildren, React.HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeType;
  color?: ButtonColorType;
  status?: ButtonStatusType;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
}
