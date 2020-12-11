import type { Values } from '@sfx-ui/utils/types';
import type { LabelProps } from '../label';
import type { InputProps } from '../input';
import type { TextareaProps } from '../textarea';
import { Type } from './types';

export type InputGroupTypesType = Values<typeof Type>;

export interface InputGroupProps extends React.HTMLAttributes<Omit<HTMLDivElement, 'align'>> {
  label?: React.ReactNode | string | number | null | undefined;
  hint?: React.ReactNode | string | number | null | undefined;
  type?: InputGroupTypesType;
  error?: boolean;
  LabelProps?: LabelProps;
  InputProps?: InputProps;
  TextareaProps?: TextareaProps;
}
