import type { Values } from '@sfx-ui/utils/types';
import { Size } from './types';

export type InputPropsSize = Values<typeof Size>;

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  size?: InputPropsSize;
  icon?: React.ReactNode;
  error?: boolean;
}
