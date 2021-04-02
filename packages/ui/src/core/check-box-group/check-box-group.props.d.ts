import type { CheckBoxProps } from '../check-box';

export interface CheckBoxGroupProps extends CheckBoxProps {
  label?: string;
  checkBoxProps?: React.InputHTMLAttributes;
  readOnly?: boolean;
  disabled?: boolean;
}
