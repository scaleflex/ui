import React, { MouseEventHandler, Ref } from 'react';

import type { Values } from '../../utils/types';
import { LabelTooltip } from './types';

export type LabelTooltipType = Values<typeof LabelTooltip>;
export type PropsType = {
  style: React.CSSProperties;
};

export type ComponentsType = {
  Rail?: any;
  Track?: any;
  Thumb?: any;
  LabelTooltip?: any;
};

export type ComponentsPropsType = {
  rail?: PropsType;
  thumb?: PropsType;
  track?: PropsType;
  labelTooltip?: PropsType;
};

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'defaultValue' | 'onChange'> {
  defaultValue?: Array<number> | number;
  value?: Array<number> | number;
  min?: number;
  max?: number;
  onChange?: (event: Event, value: Array<number> | number, activeThumb: number) => void;
  onMouseDown?: MouseEventHandler<HTMLSpanElement>;
  onMouseUp?: MouseEventHandler<HTMLSpanElement>;
  step?: number;
  annotation?: string;
  disabled?: boolean;
  disableSwap?: boolean;
  hideTrack?: boolean;
  hideAnnotation?: boolean;
  labelTooltip?: LabelTooltipType;
  components?: ComponentsType;
  componentsProps?: ComponentsPropsType;
  ref?: Ref<HTMLSpanElement>;
}
