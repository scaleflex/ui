import React, { useState, useEffect } from 'react';
import PT from 'prop-types';
import ArrowLeftOutline from '@scaleflex/icons/arrow-left-outline';
import ArrowRightOutline from '@scaleflex/icons/arrow-right-outline';
import TwoArrowsLeft from '@scaleflex/icons/two-arrows-left';
import TwoArrowsRight from '@scaleflex/icons/two-arrows-right';

import { intrinsicComponent } from '../../utils/functions';
import Popper from '../popper';
import MonthPicker from './month-picker/month-picker.component';
import YearPicker from './year-picker/year-picker.component';
import Button from '../button';
import { CalendarProps } from './calendar.props';
import {
  HEADER_DAYS,
  getCurrentDate,
  getMonthDetails,
  getDateStringFromTimestamp,
  getMonthStr,
  getDateFromDateString,
  getTodayTimestamp,
} from './calendar.utils';
import Styled from './calendar.styles';

const Calendar = intrinsicComponent<CalendarProps, HTMLDivElement>(
  ({ value, onChange, anchorEl, open = false, setOpen, ...rest }: CalendarProps, ref): JSX.Element => {
    const [year, setYear] = useState(() => new Date().getFullYear());
    const [month, setMonth] = useState(() => new Date().getMonth());
    const [monthDetails, setMonthDetails] = useState(() => getMonthDetails(year, month));
    const [selectedDay, setSelectedDay] = useState(() => getTodayTimestamp());
    const [dayDate, setDayDate] = useState(0);
    const [showMonthsDatePicker, setShowMonthsDatePicker] = useState(false);
    const [showYearsDatePicker, setShowYearsDatePicker] = useState(false);
    const [isNextMonth, setIsNextMonth] = useState(false);
    const [isPrevMonth, setIsPrevMonth] = useState(false);

    const getTimeStamp = (): number => {
      const toDayDate: any = monthDetails.find((day: any) => day.date === dayDate);

      return toDayDate?.timestamp;
    };

    const setNewYear = (offset: number): void => {
      const newYear = year + offset;
      setYear(newYear);
      setMonthDetails(getMonthDetails(newYear, month));
    };

    const setNewMonth = (offset: number, prev: boolean): void => {
      let newYear = year;
      let newMonth = month + offset;

      if (month === 0 && prev) {
        newMonth = 11;
        newYear--;
      } else if (month === 11 && !prev) {
        newMonth = 0;
        newYear++;
      }

      setYear(newYear);
      setMonth(newMonth);
      setMonthDetails(getMonthDetails(newYear, newMonth));
    };

    const handleNextMonthButton = (offset: number, prev: boolean): void => {
      setNewMonth(offset, prev);
      setIsNextMonth(true);
    };

    const handlePrevMonthButton = (offset: number, next: boolean): void => {
      setNewMonth(offset, next);
      setIsPrevMonth(true);
    };

    const handleNextYearButton = (offset: number, prev: boolean): void => {
      if (prev) {
        setIsPrevMonth(true);
      } else {
        setIsNextMonth(true);
      }

      setNewYear(offset);
    };

    const handleTodayButton = (): void => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();

      setSelectedDay(getTodayTimestamp());
      setYear(() => currentYear);
      setMonth(() => currentMonth);
      setMonthDetails(getMonthDetails(currentYear, currentMonth));

      if (onChange) {
        onChange(getCurrentDate());
      }
    };

    const handleOpen = (isOpen: boolean): void => {
      if (setOpen) setOpen(isOpen);
    };

    const onDateClick = (day: any): void => {
      setSelectedDay(day.timestamp);

      if (handleOpen) handleOpen(false);
    };

    useEffect(() => {
      if (year.toString().length !== 4) return;

      if (onChange) {
        onChange(getDateStringFromTimestamp(selectedDay, month, year));
      }
    }, [selectedDay]);

    useEffect(() => {
      const todayDate: any = monthDetails.find((day: any) => day.timestamp === selectedDay);

      if (todayDate) {
        setDayDate(todayDate.date);
      }
    }, [selectedDay]);

    useEffect(() => {
      if (value) {
        const dateData: any = getDateFromDateString(value);
        const dayData: any = monthDetails.find((day: any) => day?.date === dateData?.date);

        if (dateData !== null) {
          if (onChange) onChange(value);

          if (dayData?.timestamp && dateData.year.toString().length === 4) {
            setSelectedDay(dayData?.timestamp);
          }

          setMonth(dateData.month - 1);
          setYear(dateData.year);
          setMonthDetails(getMonthDetails(dateData.year, dateData.month - 1));
        }
      }
    }, [value]);

    useEffect(() => {
      setTimeout(() => {
        setIsNextMonth(false);
        setIsPrevMonth(false);
      }, 310);
    }, [monthDetails]);

    const renderCalendar = (): JSX.Element => {
      const days = monthDetails.map((day: any, index: number) => {
        return (
          <Styled.DatePickerDays key={index}>
            <Styled.DatePickerDayContainer>
              <Styled.DatePickerDay onClick={() => onDateClick(day)} day={day} isSelectedDay={dayDate === day.date}>
                {day.date}
              </Styled.DatePickerDay>
            </Styled.DatePickerDayContainer>
          </Styled.DatePickerDays>
        );
      });

      return (
        <Styled.DatePickerCalendar>
          <Styled.DatePickerCalendarHead>
            {HEADER_DAYS.map((d, i) => (
              <Styled.DatePickerHeadDay key={i}>{d}</Styled.DatePickerHeadDay>
            ))}
          </Styled.DatePickerCalendarHead>
          <Styled.DatePickerCalendarBody isPrevMonth={isPrevMonth} isNextMonth={isNextMonth}>
            {days}
          </Styled.DatePickerCalendarBody>
        </Styled.DatePickerCalendar>
      );
    };

    return (
      <Popper overlay onClick={() => handleOpen(!open)} anchorEl={anchorEl} open={open} position="bottom-start">
        <Styled.Calendar open={open} {...rest} ref={ref}>
          <MonthPicker
            year={year}
            setMonth={setMonth}
            getMonthStr={getMonthStr}
            _month={month}
            getTimeStamp={getTimeStamp}
            setSelectedDay={setSelectedDay}
            currentMonth={getMonthStr(month)}
            showMonthsDatePicker={showMonthsDatePicker}
            setShowMonthsDatePicker={setShowMonthsDatePicker}
            setMonthDetails={setMonthDetails}
            getMonthDetails={getMonthDetails}
            monthDetails={monthDetails}
          />

          <YearPicker
            showYearsDatePicker={showYearsDatePicker}
            setShowYearsDatePicker={setShowYearsDatePicker}
            setMonthDetails={setMonthDetails}
            getMonthDetails={getMonthDetails}
            monthDetails={monthDetails}
            getTimeStamp={getTimeStamp}
            setSelectedDay={setSelectedDay}
            setYear={setYear}
            monthIndex={month}
            _year={year}
          />

          <Styled.HeaderWrapper>
            <Styled.HeaderLeftArrows onClick={() => handleNextYearButton(-1, false)}>
              <TwoArrowsRight size={10} />
            </Styled.HeaderLeftArrows>

            <Styled.HeaderLeftArrow onClick={() => handleNextMonthButton(-1, true)}>
              <ArrowLeftOutline size={10} />
            </Styled.HeaderLeftArrow>

            <Styled.HeaderBody>
              <Styled.HeaderBodyMonth onClick={() => setShowMonthsDatePicker(true)}>
                {getMonthStr(month)}
              </Styled.HeaderBodyMonth>
              <Styled.HeaderBodyYear onClick={() => setShowYearsDatePicker(true)}>{year}</Styled.HeaderBodyYear>
            </Styled.HeaderBody>

            <Styled.HeaderRightArrow onClick={() => handlePrevMonthButton(1, false)}>
              <ArrowRightOutline size={10} />
            </Styled.HeaderRightArrow>

            <Styled.HeaderRightArrows onClick={() => handleNextYearButton(1, true)}>
              <TwoArrowsLeft size={10} />
            </Styled.HeaderRightArrows>
          </Styled.HeaderWrapper>
          <Styled.CalendarBody>{renderCalendar()}</Styled.CalendarBody>
          <Styled.ButtonWrapper>
            <Button onClick={() => handleOpen(false)} size="sm" color="basic">
              Cancel
            </Button>
            <Button onClick={handleTodayButton} size="sm" color="secondary">
              Today
            </Button>
          </Styled.ButtonWrapper>
        </Styled.Calendar>
      </Popper>
    );
  }
);

Calendar.defaultProps = {
  open: false,
};

export const propTypes = {
  value: PT.string,
  anchorEl: PT.instanceOf(Element),
  onChange: PT.func,
  open: PT.bool,
  setOpen: PT.func,
};

Calendar.propTypes = propTypes;

export default Calendar;
