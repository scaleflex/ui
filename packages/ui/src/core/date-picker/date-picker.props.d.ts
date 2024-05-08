import type { Values } from '../../utils/types';
import type { InputProps } from '../input';
import { InputGroupProps } from '../input-group';
import { PopperOptions } from '../popper/popper.props';
import { Position } from '../popper/types';

export type PopperPositionType = Values<typeof Position>;

export interface DatePickerProps extends InputGroupProps, React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  hint?: string;
  label?: string;
  fullWidth?: boolean;
  position?: PopperPositionType;
  popperOptions?: PopperOptions;
  maxDate?: string;
  minDate?: string;
  onChange?: (value: string) => void;
  autoSelectToday?: boolean;
  enableAutoSelect?: boolean;
  InputProps?: InputProps;
  inputGroupProps?: InputProps;
  calendarStyles?: object;
}
