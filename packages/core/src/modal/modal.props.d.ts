import type { PropsWithChildren } from 'react';
import type { Values } from '@sfx-ui/utils/types';
import { Size } from './types';

export type ModalSizeType = Values<typeof Size>;

export interface ModalProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  maxWidth?: ModalSizeType;
  onClose: () => void;
  // variant?: 'defautl' | 'with-icon' // TODO
}
