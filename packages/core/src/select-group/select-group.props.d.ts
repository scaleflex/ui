import type { LabelProps } from '../label';
import type { SelectProps } from '../select';

export interface SelectGroupProps
  extends Omit<SelectProps, 'size'>, React.HTMLAttributes<Omit<HTMLDivElement, 'align'>> {
  label?: React.ReactNode | string | number | null | undefined;
  hint?: React.ReactNode | string | number | null | undefined;
  LabelProps?: LabelProps;
  SelectProps?: SelectProps;
  // Extends from SelectProps: multiple, error, children, value, onChange
}
