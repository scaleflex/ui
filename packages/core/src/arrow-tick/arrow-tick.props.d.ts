import type { Values } from '@sfx-ui/utils/types';
import { Type } from './types';

export type ArrowTickPropsType = Values<typeof Type>;

export interface ArrowTickProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: ArrowTickPropsType;
}
