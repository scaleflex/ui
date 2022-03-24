import React from 'react';
import type { Values } from '../../utils/types';
import { Position, Strategy, Phases } from './types';

export type PopperPositionType = Values<typeof Position>;
export type PopperStrategyType = Values<typeof Strategy>;
export type PopperPhasesType = Values<typeof Phases>;

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

export type PopperOptions = {
  modifiers?: Modifiers;
  onFirstUpdate?: func;
  placement?: PopperPositionType;
  strategy?: PopperStrategyType;
};

export interface PopperProps extends React.HTMLAttributes<HTMLDivElement> {
  anchorEl?: Element | VirtualElement | func | object;
  position: PopperPositionType;
  popperOptions?: PopperOptions;
  open: boolean;
  overlay?: boolean;
  arrow?: boolean;
  zIndex?: number;
  enableUnderlayingEvent?: boolean;
  wrapperStyles?: object;
}
