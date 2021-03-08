import type { PropsWithChildren } from 'react';
import type { Values } from '../../utils/types';
import { Align } from './types';

export type ModalActionsAlignType = Values<typeof Align>;

export interface ModalActionsProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  align?: ModalActionsAlignType;
}
