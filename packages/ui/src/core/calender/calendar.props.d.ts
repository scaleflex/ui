export interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  className?: string;
  onChange?: (value: string | number) => void;
  open?: boolean;
  isSelectedDay?: boolean;
  isYearChanged?: boolean;
  isNextMonth?: boolean;
  isPrevMonth?: boolean;
  isMonthSelected?: boolean;
  showMonthsDatePicker?: boolean;
  showYearsDatePicker?: boolean;
  day?: any;
  year?: number;
  _year?: number;
  monthIndex?: number;
  currentMonth?: number | string;
  getMonthStr?: (value: number) => number | string;
  setMonth?: (value: number) => void;
  setYear?: (value: number) => void;
  setMonthDetails?: (value: any) => void;
  setOpenState?: (value: boolean) => void;
  getMonthDetails?: (value: number, value: number) => object[];
  setShowMonthsDatePicker?: (value: boolean) => void;
  setShowYearsDatePicker?: (value: boolean) => void;
}
