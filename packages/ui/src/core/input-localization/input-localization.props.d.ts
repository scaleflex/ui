import type { SelectProps } from '../select';

export interface InputLocalizationProps extends Omit<SelectProps, 'error' | 'size'> {
  // Extends from SelectProps: children
  icon?: React.ReactNode;
  readOnly?: boolean;
  disabled?: boolean;
}
