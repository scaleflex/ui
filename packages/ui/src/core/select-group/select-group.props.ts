import type { LabelProps } from '../label';
import type { SelectProps } from '../select';
import { SelectSizeType } from '../select/select.props';

export type LabelAndHintType = {
  error?: boolean;
};

export interface SelectGroupProps extends SelectProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label?: React.ReactNode | ((props: LabelAndHintType) => React.ReactNode);
  size?: SelectSizeType;
  hint?: React.ReactNode | ((props: LabelAndHintType) => React.ReactNode);
  LabelProps?: LabelProps;
  onClickClearIcon?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  SelectProps?: SelectProps;
  selectProps?: React.InputHTMLAttributes<HTMLInputElement>;
  fullWidth?: boolean;
  readOnly?: boolean;
  showSelectionKey?: boolean;
  hideMenuItemsActions?: boolean;
  disabled?: boolean;
  // Extends from SelectProps: multiple, error, children, value, onChange
}
