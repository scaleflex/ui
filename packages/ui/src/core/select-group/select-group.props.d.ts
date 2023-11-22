import type { LabelProps } from '../label';
import type { SelectProps } from '../select';
import { SelectSizeType } from '../select/select.props';

export interface SelectGroupProps
  extends Omit<SelectProps, 'size'>,
    React.HTMLAttributes<Omit<HTMLDivElement, 'align'>> {
  label?: React.ReactNode;
  size?: SelectSizeType;
  hint?: React.ReactNode;
  LabelProps?: LabelProps;
  SelectProps?: SelectProps;
  selectProps?: React.InputHTMLAttributes;
  fullWidth?: boolean;
  scroll?: boolean;
  readOnly?: boolean;
  showSelectionKey?: boolean;
  hideMenuItemsActions?: boolean;
  disabled?: boolean;
  // Extends from SelectProps: multiple, error, children, value, onChange
}
