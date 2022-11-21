import styled, { css, keyframes } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import type { With } from '../../utils/types';
import { FontVariant as FV } from '../../utils/types/typography';
import { Color as PColor } from '../../utils/types/palette';
import { CalendarProps } from './calendar.props';
import { getDatePickerDaysColor } from './calendar.utils';

const baseClassName = 'Calendar';

const rightDatePickerKeyframes = keyframes`
  0% {transform: translateX(-100%)}
  100% {transform: translateX(0)}
`;

const rightDatePickerAnimation = css`
  animation: ${rightDatePickerKeyframes} 300ms ease-in-out;
`;

const leftDatePickerKeyframes = keyframes`
  0% {transform: translateX(100%)}
  100% {transform: translateX(0)}
`;

const leftDatePickerAnimation = css`
  animation: ${leftDatePickerKeyframes} 300ms ease-in-out;
`;

const Calendar = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<CalendarProps>(
  ({ theme: { palette }, open }: With<WithTheme, CalendarProps>) => css`
    position: absolute;
    width: 224px;
    top: 4px;
    background: ${palette[PColor.BackgroundStateless]};
    box-shadow: 0px 1px 4px ${palette[PColor.MediumShadow]};
    border-radius: 2px;
    overflow: hidden;
    padding: 14px 12px 12px 12px;
    z-index: 1111;
    user-select: none;
    display: ${open ? '' : 'none'};
  `
);

const DatePickerCalendar = styled.div.attrs({
  className: generateClassNames(baseClassName, 'date-picker-calendar'),
})<CalendarProps>(
  () => css`
    width: 100%;
    height: 100%;
  `
);

const DatePickerCalendarHead = styled.div.attrs({
  className: generateClassNames(baseClassName, 'date-picker-calendar-head'),
})<CalendarProps>(
  () => css`
    display: flex;
    justify-content: space-between;
    height: 24px;
    width: 100%;
    margin-bottom: 5px;
    padding: 2px 4px;
    align-items: center;
  `
);

const DatePickerCalendarBody = styled.div.attrs({
  className: generateClassNames(baseClassName, 'date-picker-calendar-body'),
})(
  ({ isNextMonth = false, isPrevMonth = false }: { isNextMonth: boolean; isPrevMonth: boolean }) => css`
    position: relative;
    display: block;
    height: 174px;
    width: 100%;
    float: left;
    ${isNextMonth && rightDatePickerAnimation}
    ${isPrevMonth && leftDatePickerAnimation}
  `
);

const DatePickerHeadDay = styled.div.attrs({
  className: generateClassNames(baseClassName, 'date-picker-head-day'),
})<CalendarProps>(
  ({
    theme: {
      palette,
      typography: { font },
    },
  }: With<WithTheme, CalendarProps>) => css`
    display: flex;
    align-items: center;
    width: calc(100% / 7);
    height: 20px;
    color: ${palette[PColor.TextSecondary]};
    text-align: center;
    justify-content: center;

    ${font[FV.LabelSmall]}
  `
);

const MonthDatePickerWrapper = styled(Calendar).attrs({
  className: generateClassNames(baseClassName, 'month-date-picker-wrapper'),
})<CalendarProps>(
  ({ open = false }: CalendarProps) => css`
    top: 0;
    left: 0;
    transform: ${open ? 'translate(0)' : 'translateY(-100%)'};
    transition: all 0.4s ease-in-out;
  `
);

const MonthButtonsWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'month-buttons-wrapper'),
})<CalendarProps>(
  () => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 3px 0 28px 0;
    width: 100%;
    height: 244px;
  `
);

const MonthButtons = styled.div.attrs({
  className: generateClassNames(baseClassName, 'month-buttons'),
})(
  ({
    isYearChanged = false,
    isMonthChanged = false,
    theme: { palette },
  }: With<WithTheme, { isYearChanged?: boolean; isMonthChanged?: boolean }>) => css`
    width: calc(100% / 3);
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 58.67px;
    height: 24px;
    max-height: 24px;
    text-align: center;
    min-height: unset;
    border-radius: 2px;
    cursor: pointer;
    font-size: 13px;
    line-height: 14px;

    &:hover {
      ${!isMonthChanged &&
      !isYearChanged &&
      css`
        background-color: transparent;
        border: 1px solid ${palette[PColor.AccentPrimaryHover]};
        box-sizing: border-box;
        line-height: 22px;
      `}
    }

    background-color: ${isYearChanged || isMonthChanged
      ? palette[PColor.AccentPrimary]
      : palette[PColor.BackgroundStateless]};
    color: ${isYearChanged || isMonthChanged ? palette[PColor.IconsInvert] : ''};
  `
);

const CalendarBody = styled.div.attrs({
  className: generateClassNames(baseClassName, 'date-picker-body'),
})<CalendarProps>(
  () => css`
    height: 174px;
    width: 100%;
  `
);

const DatePickerDays = styled.div.attrs({
  className: generateClassNames(baseClassName, 'date-picker-days'),
})<CalendarProps>(
  () => css`
    position: relative;
    display: block;
    float: left;
    width: calc(100% / 7);
    height: 30px;
  `
);

const DatePickerDay = styled.span.attrs({
  className: generateClassNames(baseClassName, 'date-picker-day'),
})(
  ({ day, isSelectedDay = false, theme: { palette } }: With<WithTheme, { day: any; isSelectedDay: boolean }>) =>
    css`
      width: 24.57px;
      height: 24px;
      margin-top: -15px;
      left: 50%;
      top: 50%;
      font-weight: 400;
      border-radius: 2px;
      line-height: 23px;
      color: ${getDatePickerDaysColor(day, isSelectedDay)};
      pointer-events: ${day.month !== 0 ? 'none' : ''};
      cursor: pointer;
      transition: all 100ms ease-out;

      background-color: ${isSelectedDay && day.month === 0
        ? palette[PColor.AccentStateless]
        : palette[PColor.BackgroundStateless]};

      &:hover {
        ${!isSelectedDay &&
        css`
          background-color: transparent;
          border: 1px solid ${palette[PColor.AccentPrimaryHover]};
          box-sizing: border-box;
          line-height: 21px;
        `}
      }
    `
);

const DatePickerDayContainer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'date-picker-day-container'),
})<CalendarProps>(
  ({ theme: { palette } }: With<WithTheme, CalendarProps>) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38.5px;
    height: 35px;
    font-size: 13px;
    line-height: 14px;
    color: ${palette[PColor.TextPrimary]};
    text-align: center;
  `
);

const HeaderWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'header-wrapper'),
})<CalendarProps>(
  () => css`
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin-bottom: 25px;
    height: 16px;
  `
);

const HeaderBody = styled.div.attrs({
  className: generateClassNames(baseClassName, 'header-body'),
})<CalendarProps>(
  () => css`
    display: flex;
    align-items: center;
    column-gap: 4px;
    max-width: 93px;
    height: 100%;
  `
);

const YearsHeaderBody = styled.div.attrs({
  className: generateClassNames(baseClassName, 'years-header-body'),
})<CalendarProps>(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 4px;
    width: 100%;
    height: 100%;
    cursor: pointer;
  `
);

const HeaderBodyYear = styled.div.attrs({
  className: generateClassNames(baseClassName, 'header-body-year'),
})<CalendarProps>(
  ({
    theme: {
      palette,
      typography: { font },
    },
  }: With<WithTheme, CalendarProps>) => css`
    width: 100%;
    color: ${palette[PColor.TextPrimary]};
    font-weight: normal;
    text-align: center;
    cursor: pointer;

    ${font[FV.InputSmUp]}
  `
);

const HeaderBodyMonth = styled.div.attrs({
  className: generateClassNames(baseClassName, 'header-body-month'),
})<CalendarProps>(
  ({
    theme: {
      palette,
      typography: { font },
    },
  }: With<WithTheme, CalendarProps>) => css`
    width: 100%;
    font-weight: normal;
    text-align: center;
    color: ${palette[PColor.TextPrimary]};
    cursor: pointer;

    ${font[FV.InputSmUp]}
  `
);

const HeaderLeftArrows = styled.span.attrs({
  className: generateClassNames(baseClassName, 'header-left-arrow'),
})<CalendarProps>(
  ({ theme: { palette } }: With<WithTheme, CalendarProps>) => css`
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    color: ${palette[PColor.IconsPrimary]};
  `
);

const HeaderLeftArrow = styled.span.attrs({
  className: generateClassNames(baseClassName, 'header-left-arrow'),
})<CalendarProps>(
  ({ theme: { palette } }: With<WithTheme, CalendarProps>) => css`
    position: absolute;
    left: 16.37px;
    top: 0;
    cursor: pointer;
    color: ${palette[PColor.IconsPrimary]};
  `
);

const MonthsHeaderLeftArrow = styled.span.attrs({
  className: generateClassNames(baseClassName, 'month-header-left-arrow'),
})<CalendarProps>(
  ({ theme: { palette } }: With<WithTheme, CalendarProps>) => css`
    position: absolute;
    color: ${palette[PColor.IconsPrimary]};
    left: 0;
    top: 0;
    cursor: pointer;
  `
);

const HeaderRightArrow = styled.span.attrs({
  className: generateClassNames(baseClassName, 'header-right-arrow'),
})<CalendarProps>(
  ({ theme: { palette } }: With<WithTheme, CalendarProps>) => css`
    position: absolute;
    right: 16.37px;
    top: 0;
    cursor: pointer;
    color: ${palette[PColor.IconsPrimary]};
  `
);

const MonthsHeaderRightArrow = styled.span.attrs({
  className: generateClassNames(baseClassName, 'month-header-right-arrow'),
})<CalendarProps>(
  ({ theme: { palette } }: With<WithTheme, CalendarProps>) => css`
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    color: ${palette[PColor.IconsPrimary]};
  `
);

const HeaderRightArrows = styled.span.attrs({
  className: generateClassNames(baseClassName, 'header-right-arrows'),
})<CalendarProps>(
  ({ theme: { palette } }: With<WithTheme, CalendarProps>) => css`
    position: absolute;
    right: 0;
    color: ${palette[PColor.IconsPrimary]};
    top: 0;
    cursor: pointer;
  `
);

const ButtonWrapper = styled.span.attrs({
  className: generateClassNames(baseClassName, 'button-wrapper'),
})<CalendarProps>(
  () => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 4px;
    width: 100%;
    height: 32px;
    padding-top: 12px;
  `
);

const Styled = applyDisplayNames({
  Calendar,
  MonthDatePickerWrapper,
  MonthButtonsWrapper,
  MonthButtons,
  CalendarBody,
  DatePickerDays,
  DatePickerDay,
  DatePickerDayContainer,
  DatePickerCalendarHead,
  DatePickerCalendarBody,
  DatePickerHeadDay,
  DatePickerCalendar,
  HeaderWrapper,
  HeaderBody,
  YearsHeaderBody,
  ButtonWrapper,
  HeaderBodyYear,
  HeaderBodyMonth,
  HeaderLeftArrows,
  MonthsHeaderLeftArrow,
  HeaderRightArrows,
  HeaderRightArrow,
  MonthsHeaderRightArrow,
  HeaderLeftArrow,
});

export default Styled;
