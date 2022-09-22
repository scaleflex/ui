import { ChangeEvent } from 'react';
import { CheckBoxSizeType } from '../check-box-group/check-box-group.props';

export interface CheckBoxProps extends React.HTMLAttributes<HTMLSpanElement> {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checkBoxProps?: React.InputHTMLAttributes;
  readOnly?: boolean;
  disabled?: boolean;
  size?: CheckBoxSizeType;
}
