import type { InputProps } from '../input';

export interface UploadInputProps extends Omit<InputProps, 'iconStart' | 'iconEnd'> {
  buttonLabel?: string;
  placeholder?: string;
}
