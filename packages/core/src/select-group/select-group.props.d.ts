import type { LabelProps } from '../label';
import type { SelectProps } from '../select';

export interface SelectGroupProps
  extends Omit<SelectProps, 'size'>, React.HTMLAttributes<Omit<HTMLDivElement, 'align'>> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  LabelProps?: LabelProps;
  SelectProps?: SelectProps;
  // Extends from SelectProps: multiple, error, children, value, onChange
}
