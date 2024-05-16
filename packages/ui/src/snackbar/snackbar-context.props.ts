import type { PopupProps } from '../core/popup/popup.props';

export interface SnackbarContextProps extends PopupProps {
  showMessage?: () => void;
}
