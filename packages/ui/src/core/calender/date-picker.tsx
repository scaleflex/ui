/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
import React, { useState, useEffect, useRef } from 'react';
import PT from 'prop-types';
import ArrowLeftOutline from '@scaleflex/icons/arrow-left-outline';
import ArrowRightOutline from '@scaleflex/icons/arrow-right-outline';
import TwoArrowsLeft from '@scaleflex/icons/two-arrows-left';
import TwoArrowsRight from '@scaleflex/icons/two-arrows-right';

import { intrinsicComponent } from '../../utils/functions';
import { DAYS, HEADER_DAYS, MONTHS, getDateString } from './calendar.utils';
import { CalendarProps } from './calendar.props';
import MonthPicker from './month-picker/month-picker.component';
import YearPicker from './year-picker/year-picker.component';
import Styled from './calendar.styles';
import Button from '../button';
import DatepickerInput from './date-picker-input/date-picker-input';
import Popper from '../popper';

const oneDay = 60 * 60 * 24 * 1000;
const todayTimestamp = Date.now() - (Date.now() % oneDay) + new Date().getTimezoneOffset() * 1000 * 60;

const DatePicker = intrinsicComponent<CalendarProps, HTMLDivElement>(
  ({ onChange, open = false, value, maxWidth, setOpenState, ...rest }: CalendarProps, ref) => {
    const [year, setYear] = useState(() => new Date().getFullYear());
    const [month, setMonth] = useState(() => new Date().getMonth());
    const [selectedDay, setSelectedDay] = useState(() => todayTimestamp);
    const [showMonthsDatePicker, setShowMonthsDatePicker] = useState(false);
    const [showYearsDatePicker, setShowYearsDatePicker] = useState(false);
    const [isNextMonth, setIsNextMonth] = useState(false);
    const [isPrevMonth, setIsPrevMonth] = useState(false);

    const datepickerInput = useRef();

    const getNumberOfDays = (_year: number, _month: number): number => {
      return 40 - new Date(_year, _month, 40).getDate();
    };

    const getCurrentDate = (): string | number => {
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

    const getDateStringFromTimestamp = (timestamp: number): string | number => {
      const dateObject = new Date(timestamp);

      const _month = dateObject.getMonth() + 1;
      const date = dateObject.getDate();
      return `${dateObject.getFullYear()}-${_month < 10 ? `0${_month}` : _month}-${date < 10 ? `0${date}` : date}`;
    };

    const getDayDetails = (args: any): object => {
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

    const getMonthDetails = (year: number, month: number): object[] => {
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

    const [monthDetails, setMonthDetails] = useState(() => getMonthDetails(year, month));

    useEffect(() => {
      if (onChange) {
        onChange(getDateStringFromTimestamp(selectedDay));
      }
    }, [selectedDay]);

    const isSelectedDay = (day: any): boolean => {
      return day.timestamp === selectedDay;
    };

    const getMonthStr = (month: number): number | string => {
      return MONTHS[Math.max(Math.min(11, month), 0)] || 'Month';
    };

    const onDateClick = (day: any): void => {
      setSelectedDay(day.timestamp);
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
      if (onChange) {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();

        setSelectedDay(() => todayTimestamp);
        setYear(() => currentYear);
        setMonth(() => currentMonth);
        onChange(getCurrentDate());
        setMonthDetails(getMonthDetails(currentYear, currentMonth));
      }
    };

    const getDateFromDateString = (dateValue: any): object | null => {
      const dateData = dateValue.split('-').map((d: string) => Number.parseInt(d, 10));

      if (dateData.length < 3) {
        return null;
      }

      const year = dateData[0];
      const month = dateData[1];
      const date = dateData[2];

      return { year, month, date };
    };

    const setDate = (dateData: any): void => {
      const selectedDay = new Date(dateData.year, dateData.month - 1, dateData.date).getTime();

      setSelectedDay(selectedDay);

      if (onChange) {
        onChange(getDateString('ymd', '-', selectedDay));
      }
    };

    const updateDateFromInput = (e: string | number): void => {
      const dateData: any = getDateFromDateString(e);

      if (dateData !== null) {
        setDate(dateData);
        setMonth(dateData.month - 1);
        setYear(dateData.year);
        setMonthDetails(getMonthDetails(dateData.year, dateData.month - 1));
      }

      setOpenState?.(false);
    };

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
              <Styled.DatePickerDay onClick={() => onDateClick(day)} day={day} isSelectedDay={isSelectedDay(day)}>
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
      <>
        <Styled.DatePicker ref={ref}>
          <DatepickerInput
            maxWidth={maxWidth}
            datepickerInput={datepickerInput}
            value={value}
            open={open}
            setOpenState={setOpenState}
            onChange={(e) => updateDateFromInput(e)}
          />
          <Popper
            overlay
            onClick={() => setOpenState?.(!open)}
            anchorEl={datepickerInput.current}
            open={open}
            position="bottom-start"
          >
            <Styled.DatePickerWrapper open={open} {...rest}>
              <MonthPicker
                year={year}
                setMonth={setMonth}
                getMonthStr={getMonthStr}
                _month={month}
                currentMonth={getMonthStr(month)}
                showMonthsDatePicker={showMonthsDatePicker}
                setShowMonthsDatePicker={setShowMonthsDatePicker}
                setMonthDetails={setMonthDetails}
                getMonthDetails={getMonthDetails}
                {...rest}
              />

              <YearPicker
                showYearsDatePicker={showYearsDatePicker}
                setShowYearsDatePicker={setShowYearsDatePicker}
                setMonthDetails={setMonthDetails}
                getMonthDetails={getMonthDetails}
                setYear={setYear}
                monthIndex={month}
                _year={year}
                {...rest}
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
              <Styled.DatePickerBody>{renderCalendar()}</Styled.DatePickerBody>
              <Styled.ButtonWrapper>
                <Button onClick={() => setOpenState?.(false)} size="sm" color="basic">
                  Cancel
                </Button>
                <Button onClick={handleTodayButton} size="sm" color="basic">
                  Today
                </Button>
              </Styled.ButtonWrapper>
            </Styled.DatePickerWrapper>
          </Popper>
        </Styled.DatePicker>
      </>
    );
  }
);

export default DatePicker;

export const propTypes = {
  value: PT.string,
  onChange: PT.func,
  open: PT.bool,
  maxWidth: PT.bool,
};

DatePicker.propTypes = propTypes;
