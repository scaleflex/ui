import type { LabelProps } from '../label';
import type { SelectProps } from '../select';

export interface SelectGroupProps
  extends Omit<SelectProps, 'size'>,
    React.HTMLAttributes<Omit<HTMLDivElement, 'align'>> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  LabelProps?: LabelProps;
  SelectProps?: SelectProps;
  selectProps?: React.InputHTMLAttributes;
  fullWidth?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  // Extends from SelectProps: multiple, error, children, value, onChange
}
