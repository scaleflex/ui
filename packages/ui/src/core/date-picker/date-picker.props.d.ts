import { CalendarProps } from '../calendar';
import type { InputProps } from '../input';
import { InputGroupProps } from '../input-group';

export interface DatePickerProps extends InputGroupProps, React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onChange?: (value: string) => void;
  InputProps?: InputProps;
  CalendarProps?: CalendarProps;
}
