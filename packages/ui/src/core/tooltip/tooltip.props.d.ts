import type { Values } from '../../utils/types';
import { Position, Size, Strategy, Phases } from './types';

export type TooltipPositionType = Values<typeof Position>;
export type TooltipSizeType = Values<typeof Size>;

export type PopperStrategyType = Values<typeof Strategy>;
export type PopperPhasesType = Values<typeof Phases>;

export type PopperOptions = {
  modifiers?: array;
  onFirstUpdate?: func;
  placement?: PopperPositionType;
  strategy?: PopperStrategyType;
};

export type Modifiers = {
  data?: object;
  effect?: func;
  enabled?: boolean;
  fn?: func;
  name?: any;
  options?: object;
  phase?: PopperPhasesType;
  requires?: string[];
  requiresIfExists?: string[];
}[];

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  position?: TooltipPositionType;
  size?: TooltipSizeType;
  title: ReactNode;
  children: ReactElement;
  popperOptions?: PopperOptions;
  arrow?: boolean;
  enableUnderlayingEvent?: boolean;
  popperWrapperStyles?: object;
  enableHover?: boolean;
  enterDelay?: number;
  leaveDelay?: number;
}
