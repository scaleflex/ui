import type { PropsWithChildren } from 'react';
import type { Values } from '@sfx-ui/utils/types';
import { Type } from './types';

export type LabelPropsSize = Values<typeof Type>;

export interface LabelProps extends PropsWithChildren, React.HTMLAttributes<HTMLLabelElement> {
  type?: LabelPropsSize;
  icon?: React.ReactNode;
  error?: boolean;
}
