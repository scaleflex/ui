import type { Values } from '@sfx-ui/utils/types';
import { Type } from './types';

export type ArrowPropsType = Values<typeof Type>;

export interface ArrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: ArrowPropsType;
}
