import { ButtonColor } from '../../utils/types';
import type { InputProps } from '../input';

export type ButtonColorType = Values<typeof ButtonColor>;

export interface UploadInputProps extends Omit<InputProps, 'iconStart' | 'iconEnd'> {
  buttonLabel?: string;
  placeholder?: string;
  buttonColor?: ButtonColorType;
}
