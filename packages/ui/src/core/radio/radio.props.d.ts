import { ChangeEvent } from 'react';

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  radioProps?: React.InputHTMLAttributes;
  readOnly?: boolean;
  disabled?: boolean;
}
