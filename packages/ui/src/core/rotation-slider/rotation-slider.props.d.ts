import React from 'react';
import type { Values } from '../../utils/types';
import { LabelTooltip, PropsType } from '../slider/types';

export type LabelTooltipType = Values<typeof LabelTooltip>;

export interface RotationSliderProps extends React.HTMLAttributes<HTMLSpanElement> {
  value?: number | number[];
  min?: number;
  max?: number;
  angle?: number;
  onChange?: (event: Event, value: Array<number> | number) => void;
  onMouseDown?: (event: Event) => void;
  onMouseUp?: (event: Event) => void;
  step?: number;
  annotation?: string;
  hideMarkText?: boolean;
  railProps?: PropsType;
  trackProps?: PropsType;
  thumbProps?: PropsType;
  markStyles?: React.CSSProperties;
  markTextStyles?: React.CSSProperties;
  labelTooltipProps?: PropsType;
  labelTooltipOptions?: LabelTooltipType;
}
