import { ChangeEvent } from 'react';

export interface CheckBoxProps extends React.HTMLAttributes<HTMLSpanElement> {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checkBoxProps?: React.InputHTMLAttributes;
  readOnly?: boolean;
  disabled?: boolean;
}
