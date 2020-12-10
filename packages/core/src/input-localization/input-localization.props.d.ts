import type { SelectProps, SelectPropsSimpleValueType } from '../select';

export interface InputLocalizationProps extends Omit<SelectProps, 'multiple' | 'error' | 'size' | 'value' | 'onChange'> {
  // Extends from SelectProps: children
  value?: SelectPropsSimpleValueType;
  onChange?: (value: SelectPropsSimpleValueType) => void;
  icon?: React.ReactNode;
}
