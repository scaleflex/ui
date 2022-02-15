import type { PropsWithChildren } from 'react';
import type { Values } from '../../utils/types';
import { Type } from './types';

export type LabelTypesType = Values<typeof Type>;

export interface LabelProps extends PropsWithChildren, React.HTMLAttributes<HTMLLabelElement> {
  type?: LabelTypesType;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  error?: boolean;
  htmlFor?: string;
}
