import type { Values } from '../../utils/types';
import { Size } from './types';

export type CrossButtonSizeType = Values<typeof Size>;

export interface CrossButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: CrossButtonSizeType;
}
