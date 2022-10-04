import { ChangeEvent } from 'react';
import type { Values } from '../../utils/types';
import { Size, Type } from './types/size';

export type CheckBoxSizeType = Values<typeof Size>;
export type CheckBoxType = Values<typeof Type>;
export interface CheckBoxProps extends React.HTMLAttributes<HTMLSpanElement> {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checkBoxProps?: React.InputHTMLAttributes;
  readOnly?: boolean;
  disabled?: boolean;
  size?: CheckBoxSizeType;
  type?: CheckBoxType;
}
