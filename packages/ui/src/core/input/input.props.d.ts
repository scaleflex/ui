import type { Values } from '../../utils/types';
import { Size } from './types';

export type InputSizeType = Values<typeof Size>;

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  size?: InputSizeType;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  error?: boolean;
  fullWidth?: boolean;
  value?: string;
  readOnly?: boolean;
}
