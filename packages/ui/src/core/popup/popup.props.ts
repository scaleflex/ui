import type { Values } from '../../utils/types';
import type { PopupContentProps } from '../popup-content';
import { Vertical, Horizontal } from './types';
import { Status } from '../popup-status/types';

export type PopupContentType = Values<typeof Status>;
export type PopupAnchorOriginVerticalType = Values<typeof Vertical>;
export type PopupAnchorOriginHorizontalType = Values<typeof Horizontal>;

export interface PopupAnchorOriginProps {
  vertical?: PopupAnchorOriginVerticalType;
  horizontal?: PopupAnchorOriginHorizontalType;
}

export interface PopupProps extends PopupContentProps {
  open?: boolean;
  anchorOrigin?: PopupAnchorOriginProps;
  autoHideDuration?: number;
  status?: PopupContentType;
  onClose?: () => void;
}
