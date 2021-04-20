import type { SelectProps, SelectSimpleValueType } from '../select';

export interface InputLocalizationProps extends Omit<SelectProps, 'error' | 'size'> {
  // Extends from SelectProps: children
  icon?: React.ReactNode;
  readOnly?: boolean;
  disabled?: boolean;
  renderLabel?: (value: SelectSimpleValueType | SelectSimpleValueType[]) => React.ReactNode;
}
