import { Status } from '../popup-status/types';
import type { Values } from '../../utils/types';
import { PopupStatusProps } from '../popup-status';

export type PopupStatusType = Values<typeof Status>;

export interface PopupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  message: React.ReactNode;
  onClose?: () => void;
  status?: PopupStatusType;
  popupStatusProps?: PopupStatusProps;
}
