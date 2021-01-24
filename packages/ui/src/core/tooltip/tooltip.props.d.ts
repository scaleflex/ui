import type { Values } from '../../utils/types';
import { Position, Size } from './types';

export type TooltipPositionType = Values<typeof Position>;
export type TooltipSizeType = Values<typeof Size>;

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  position?: TooltipPositionType;
  size?: TooltipSizeType;
  title: ReactNode;
  children: ReactElement;
}
