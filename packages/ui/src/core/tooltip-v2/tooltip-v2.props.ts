import { Ref } from 'react';
import type { Values } from '../../utils/types';
import { Position, Size, Variant } from './types';

export type TooltipPositionType = Values<typeof Position>;
export type TooltipSizeType = Values<typeof Size>;
export type TooltipVariantType = Values<typeof Variant>;

export interface TooltipV2Props extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'title'> {
  position?: TooltipPositionType;
  size?: TooltipSizeType;
  title: React.ReactNode;
  children: React.ReactElement;
  arrow?: boolean;
  enableHover?: boolean;
  warning?: boolean;
  info?: boolean;
  hide?: boolean;
  enterDelay?: number;
  leaveDelay?: number;
  offsetX?: number;
  offsetY?: number;
  variant?: TooltipVariantType;
  ref?: Ref<HTMLSpanElement>;
}
