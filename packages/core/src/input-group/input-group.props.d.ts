import type { Values } from '@sfx-ui/utils/types';
import type { LabelProps } from '../label';
import { Type } from './types';

export type InputGroupPropsType = Values<typeof Type>;

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode | string | number | null | undefined;
  hint?: React.ReactNode | string | number | null | undefined;
  type?: InputGroupPropsType;
  error?: boolean;
  LabelProps?: LabelProps;
}
