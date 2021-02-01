import type { PopupProps } from '@scaleflex/ui/core/popup/popup.props';

export interface SnackbarContextProps extends PopupProps {
  showMessage?: () => void;
}
