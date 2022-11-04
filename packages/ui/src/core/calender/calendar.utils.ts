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
