import type { Values } from '../../utils/types';
import { ClockProps } from '../clock';
import type { InputProps } from '../input';
import { InputGroupProps } from '../input-group';
import { Position } from '../popper/types';
import { PopperOptions } from '../popper/popper.props';

export type PopperPositionType = Values<typeof Position>;

export interface TimePickerProps extends InputGroupProps, React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  hint?: string;
  label?: string;
  fullWidth?: boolean;
  position?: PopperPositionType;
  popperPosition?: PopperOptions;
  onChange?: (value: string) => void;
  InputProps?: InputProps;
  inputGroupProps?: InputProps;
  ClockProps?: ClockProps;
}
