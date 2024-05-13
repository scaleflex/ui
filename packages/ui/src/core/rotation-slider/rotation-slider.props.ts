import React, { MouseEventHandler } from 'react';

import type { Values } from '../../utils/types';
import { LabelTooltip } from '../slider/types';

export type LabelTooltipType = Values<typeof LabelTooltip>;

export interface RotationSliderProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onChange'> {
  value?: number;
  min?: number;
  max?: number;
  angle?: number;
  onChange?: (event: Event, value: number) => void;
  onMouseDown?: MouseEventHandler<HTMLSpanElement>;
  onMouseUp?: MouseEventHandler<HTMLSpanElement>;
  step?: number;
  annotation?: string;
  hideMarkText?: boolean;
  showCurrentMarkText?: boolean;
  railProps?: React.HTMLAttributes<HTMLSpanElement>;
  trackProps?: React.HTMLAttributes<HTMLSpanElement>;
  thumbProps?: React.HTMLAttributes<HTMLSpanElement>;
  markStyles?: React.CSSProperties;
  markTextStyles?: React.CSSProperties;
  labelTooltipProps?: React.HTMLAttributes<HTMLSpanElement>;
  labelTooltipOptions?: LabelTooltipType;
}
