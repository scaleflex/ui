import { HTMLAttributes } from 'react';
import { ButtonColor, Values } from '../../utils/types';

export type ButtonColorType = Values<typeof ButtonColor>;

export interface UploadInputProps extends HTMLAttributes<HTMLInputElement> {
  buttonLabel?: string;
  placeholder?: string;
  buttonColor?: ButtonColorType;
  error?: boolean;
}
