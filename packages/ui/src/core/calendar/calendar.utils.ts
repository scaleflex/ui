import { lightPalette } from '../../theme/roots/palette';
import { Color } from '../../utils/types/palette';

export const getDatePickerDaysColor = (day: any, isSelectedDay: boolean): string => {
  if (day.month !== 0) return lightPalette[Color.TextSecondaryInvert];

  if (isSelectedDay) return lightPalette[Color.TextPrimaryInvert];

  return lightPalette[Color.TextPrimary];
};

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const HEADER_DAYS = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

export const MONTHS_PICKER = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const oneDay = 60 * 60 * 24 * 1000;
export const getTodayTimestamp = () => Date.now() - (Date.now() % oneDay) + new Date().getTimezoneOffset() * 1000 * 60;

export const getCurrentDate = (): string => {
  const date = new Date();
  let currentMonth: number | string = date.getMonth() + 1;

  if (currentMonth < 10) {
    currentMonth = `0${currentMonth}`;
  }

  let currentDay: number | string = date.getDate();

  if (currentDay < 10) {
    currentDay = `0${currentDay}`;
  }

  return `${date.getFullYear()}-${currentMonth}-${currentDay}`;
};

export const getNumberOfDays = (_year: number, _month: number): number => {
  return 40 - new Date(_year, _month, 40).getDate();
};

export const getDayDetails = (args: any): object => {
  const date: number = args.index - args.firstDay;
  const day = args.index % 7;
  let prevMonth = args.month - 1;
  let prevYear = args.year;

  if (prevMonth < 0) {
    prevMonth = 11;
    prevYear--;
  }

  const prevMonthNumberOfDays: number = getNumberOfDays(prevYear, prevMonth);
  const _date = (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;
  const month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
  const timestamp = new Date(args.year, args.month, _date).getTime();

  return {
    date: _date,
    day,
    month,
    timestamp,
    dayString: DAYS[day],
  };
};

export const getMonthDetails = (year: number, month: number): object[] => {
  const firstDay = new Date(year, month).getDay();

  const numberOfDays = getNumberOfDays(year, month);
  const monthArray = [];

  const rows = 6;
  let currentDay = null;
  let index = 0;
  const cols = 7;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      currentDay = getDayDetails({
        index,
        numberOfDays,
        firstDay,
        year,
        month,
      });
      monthArray.push(currentDay);
      index++;
    }
  }

  return monthArray;
};

export const getDateStringFromTimestamp = (timestamp: number, month: number, year: number): string => {
  const dateObject = new Date(timestamp);
  const _month = month + 1;
  const date = dateObject.getDate();

  return `${year}-${_month < 10 ? `0${_month}` : _month}-${date < 10 ? `0${date}` : date}`;
};

export const getMonthStr = (month: number): number | string => {
  return MONTHS[Math.max(Math.min(11, month), 0)] || 'Month';
};

export const getDateFromDateString = (dateValue: any): object | null => {
  const dateData = dateValue.split('-').map((d: string) => Number.parseInt(d, 10));

  if (dateData.length < 3) {
    return null;
  }

  const year = dateData[0];
  const month = dateData[1];
  const date = dateData[2];

  return { year, month, date };
};
