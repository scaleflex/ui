import type { Values } from '../../utils/types';
import { Status } from './types';

export type PopupStatusType = Values<typeof Status>;

export interface PopupStatusProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: PopupStatusType;
  notificationBackground?: boolean;
}
