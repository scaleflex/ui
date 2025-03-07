import { Ref } from 'react';
import type { Values } from '../../utils/types';
import { PopperPhasesType, PopperPositionType, PopperStrategyType } from '../popper/popper.props';
import { Position, Size } from './types';

export type TooltipPositionType = Values<typeof Position>;
export type TooltipSizeType = Values<typeof Size>;

export type PopperOptions = {
  modifiers?: Modifiers;
  onFirstUpdate?: () => void;
  placement?: PopperPositionType;
  strategy?: PopperStrategyType;
};

export type Modifiers = {
  data?: object;
  effect?: () => void;
  enabled?: boolean;
  fn?: () => void;
  name?: any;
  options?: object;
  phase?: PopperPhasesType;
  requires?: string[];
  requiresIfExists?: string[];
}[];

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'title'> {
  position?: TooltipPositionType;
  size?: TooltipSizeType;
  title: React.ReactNode;
  children: React.ReactElement;
  popperOptions?: PopperOptions;
  arrow?: boolean;
  enableUnderlayingEvent?: boolean;
  popperWrapperStyles?: object;
  tooltipProps?: object;
  enableHover?: boolean;
  warning?: boolean;
  enterDelay?: number;
  leaveDelay?: number;
  stayOpen?: boolean;
  ref?: Ref<HTMLSpanElement>;
}
