import { CalendarProps } from '../calendar';
import type { InputProps } from '../input';
import { InputGroupProps } from '../input-group';

export interface DatePickerProps extends InputGroupProps, React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  maxDate?: string;
  minDate?: string;
  onChange?: (value: string) => void;
  autoSelectToday?: boolean;
  InputProps?: InputProps;
  CalendarProps?: CalendarProps;
}
