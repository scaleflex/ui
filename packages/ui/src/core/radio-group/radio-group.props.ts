import { Ref } from 'react';
import { RadioSizeType } from '../radio/radio.props';

export interface RadioGroupProps extends React.HTMLAttributes<HTMLLabelElement> {
  label?: React.ReactNode;
  radioProps?: React.InputHTMLAttributes<HTMLInputElement>;
  radioStyles?: object;
  labelStyles?: object;
  readOnly?: boolean;
  disabled?: boolean;
  checked?: boolean;
  size?: RadioSizeType;
  onChange?: (event: any) => void;
  ref?: Ref<HTMLLabelElement>;
}
