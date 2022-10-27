import type { PropsWithChildren } from 'react';
import type { Values } from '../../utils/types';
import { InputSizeType } from '../input/input.props';
import { Type } from './types';

export type LabelTypesType = Values<typeof Type>;

export interface LabelProps extends PropsWithChildren, React.HTMLAttributes<HTMLLabelElement> {
  type?: LabelTypesType;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  size?: InputSizeType;
  htmlFor?: string;
}
