import type { SelectProps, SelectSimpleValueType } from '../select';

export interface InputLocalizationProps extends Omit<SelectProps, 'multiple' | 'error' | 'size' | 'value' | 'onChange'> {
  // Extends from SelectProps: children
  value?: SelectSimpleValueType;
  onChange?: (value: SelectSimpleValueType) => void;
  icon?: React.ReactNode;
}
