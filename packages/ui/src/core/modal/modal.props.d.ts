import type { PropsWithChildren } from 'react';
import type { Values } from '../../utils/types';
import { Size } from './types';

export type ModalSizeType = Values<typeof Size>;

export interface ModalProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  fullWidth?: boolean;
  modalStyles?: object;
  disableOverlayClick?: boolean;
  hideOverlay?: boolean;
  maxWidth?: ModalSizeType;
  onClose?: () => void;
}
