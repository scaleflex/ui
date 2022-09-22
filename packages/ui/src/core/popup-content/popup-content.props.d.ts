import type { PopupStatusProps } from '../popup-status';

export interface PopupContentProps extends PopupStatusProps, React.HTMLAttributes<HTMLDivElement> {
  message: React.ReactNode;
  onClose?: () => void;
  status?: string;
}
