import type { SelectProps } from '../select';
import { InputSize, Values } from '../../utils/types';

export type InputSizeType = Values<typeof InputSize>;
export interface InputLocalizationProps extends Omit<SelectProps, 'error' | 'size'> {
  // Extends from SelectProps: children
  icon?: React.ReactNode;
  size?: InputSizeType;
  readOnly?: boolean;
  disabled?: boolean;
}
