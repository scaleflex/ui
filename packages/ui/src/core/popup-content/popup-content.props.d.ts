import type { PopupStatusProps } from '../popup-status';
import { Status } from '../popup-status/types';
import type { Values } from '../../utils/types';

export type PopupContentType = Values<typeof Status>;

export interface PopupContentProps extends PopupStatusProps, React.HTMLAttributes<HTMLDivElement> {
  message: React.ReactNode;
  onClose?: () => void;
  status?: PopupContentType;
}
