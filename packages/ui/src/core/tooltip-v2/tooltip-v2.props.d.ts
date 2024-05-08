import type { Values } from '../../utils/types';
import { Position, Size } from './types';

export type TooltipPositionType = Values<typeof Position>;
export type TooltipSizeType = Values<typeof Size>;

export interface TooltipV2Props extends React.HTMLAttributes<HTMLSpanElement> {
  position?: TooltipPositionType;
  size?: TooltipSizeType;
  title: ReactNode;
  children: ReactElement;
  arrow?: boolean;
  tooltipProps?: object;
  enableHover?: boolean;
  warning?: boolean;
  info?: boolean;
  enterDelay?: number;
  leaveDelay?: number;
  offsetX?: number;
  offsetY?: number;
}
