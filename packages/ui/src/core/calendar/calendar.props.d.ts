export type AnchorElType = Element | null | undefined;

export interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  anchorEl?: AnchorElType;
  open?: boolean;
  onChange?: (value: string) => void;
  setOpen?: (value: boolean) => void;
}

export interface MonthPickerProps {
  _month?: number;
  year?: number;
  showMonthsDatePicker?: boolean;
  currentMonth?: number | string;
  getMonthStr?: (value: number) => number | string;
  monthDetails?: array;
  setMonth?: (value: number) => void;
  setSelectedDay?: (value: number) => void;
  setMonthDetails?: (value: any) => void;
  getMonthDetails?: (value: number, value: number) => object[];
  getTimeStamp?: () => number;
  setShowMonthsDatePicker?: (value: boolean) => void;
}

export interface YearPickerProps {
  showYearsDatePicker?: boolean;
  _year?: number;
  monthIndex?: number;
  monthDetails?: array;
  setYear?: (value: number) => void;
  setSelectedDay?: (value: number) => void;
  setMonthDetails?: (value: any) => void;
  getMonthDetails?: (value: number, value: number) => object[];
  getTimeStamp?: () => number;
  setShowYearsDatePicker?: (value: boolean) => void;
}
