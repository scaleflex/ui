import React from 'react';
import type { Values } from '../../utils/types';
import { LabelTooltip } from './types';

export type LabelTooltipType = Values<typeof LabelTooltip>;
export type PropsType = {
  style: React.CSSProperties;
};

export type ComponentsType = {
  Rail?: React.ElementType;
  Track?: React.ElementType;
  Thumb?: React.ElementType;
  LabelTooltip?: React.ElementType;
};

export type ComponentsPropsType = {
  rail?: PropsType;
  thumb?: PropsType;
  track?: PropsType;
  labelTooltip?: PropsType;
};
export interface SliderProps extends React.HTMLAttributes<HTMLSpanElement> {
  defaultValue?: Array<number> | number;
  value?: Array<number> | number;
  min?: number;
  max?: number;
  onChange?: (event: Event, value: Array<number> | number, activeThumb: number) => void;
  onMouseDown?: (event: Event) => void;
  onMouseUp?: (event: Event) => void;
  step?: number;
  annotation?: string;
  disabled?: boolean;
  disableSwap?: boolean;
  hideTrack?: boolean;
  hideAnnotation?: boolean;
  labelTooltip?: LabelTooltipType;
  components?: ComponentsType;
  componentsProps?: ComponentsPropsType;
}
