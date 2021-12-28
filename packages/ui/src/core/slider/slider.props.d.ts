import type { Values } from '../../utils/types';
import { LabelTooltip } from './types';

export type LabelTooltipType = Values<typeof LabelTooltip>;
export interface SliderProps extends React.HTMLAttributes<HTMLSpanElement> {
  defaultValue?: Array<number> | number;
  value?: Array<number> | number;
  min?: number;
  max?: number;
  onChange?: (event: Event, value: Array<number> | number, activeThumb: number) => void;
  onMouseDown?: (event: Event) => void;
  onMouseUp?: (event: Event) => void;
  step?: number;
  // isActive: boolean;
  annotation?: string;
  disabled?: boolean;
  disableSwap?: boolean;
  hideTrack?: boolean;
  labelTooltip?: LabelTooltipType;
}
