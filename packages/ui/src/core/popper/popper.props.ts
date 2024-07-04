import React from 'react';
import type { Values } from '../../utils/types';
import { Position, Strategy, Phases } from './types';

export type PopperPositionType = Values<typeof Position>;
export type PopperStrategyType = Values<typeof Strategy>;
export type PopperPhasesType = Values<typeof Phases>;
export type VirtualElement = {
  getBoundingClientRect: () => DOMRect;
  contextElement?: Element;
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

export type PopperOptions = {
  modifiers?: Modifiers;
  onFirstUpdate?: () => void;
  placement?: PopperPositionType;
  strategy?: PopperStrategyType;
};

export interface PopperProps extends React.HTMLAttributes<HTMLDivElement> {
  anchorEl?: Element | VirtualElement | null;
  position: PopperPositionType;
  popperOptions?: PopperOptions;
  open: boolean;
  warning?: boolean;
  overlay?: boolean;
  arrow?: boolean;
  zIndex?: number;
  enableUnderlayingEvent?: boolean;
  wrapperStyles?: object;
}
