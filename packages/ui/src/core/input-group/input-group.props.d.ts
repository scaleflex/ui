import { InputHTMLAttributes } from 'react';
import type { Values } from '../../utils/types';
import type { LabelProps } from '../label';
import type { InputProps } from '../input';
import type { TextareaProps } from '../textarea';
import { Type } from './types';

export type InputGroupTypesType = Values<typeof Type>;

export interface InputGroupProps extends React.HTMLAttributes<Omit<HTMLDivElement, 'align'>> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  type?: InputGroupTypesType;
  error?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  LabelProps?: LabelProps;
  InputProps?: InputProps;
  inputProps?: React.InputHTMLAttributes;
  inputRef?: React.Ref;
  TextareaProps?: TextareaProps;
  readOnly?: boolean;
}
