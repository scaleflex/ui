import React, { useState, useEffect } from 'react';
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
  isYearFormRegex,
  getNextPrevSelectedDayTimeStamp,
  getNextPrevYearSelectedDayTimeStamp,
  getMaxMinSelectedDay,
  getMaxDate,
  getMinDate,
} from './calendar.utils';
import Styled from './calendar.styles';
import { Position } from '../popper/types';

const Calendar = intrinsicComponent<CalendarProps, HTMLDivElement>(
  (
    {
      value,
      onChange,
      autoSelectToday,
      enableAutoSelect = false,
      maxDate = '',
      minDate = '',
      anchorEl,
      zIndex = 1300,
      position = Position.BottomStart,
      popperOptions,
      open = false,
      setOpen,
      calendarStyles,
      popperWrapperStyles,
      ...rest
    }: CalendarProps,
    ref
  ): JSX.Element => {
    const { maxYear, maxMonth, maxDay, maxDateTimestamp } = getMaxDate(maxDate);

    const { minYear, minMonth, minDay, minDateTimestamp } = getMinDate(minDate);

    const [year, setYear] = useState(maxDate ? maxYear : new Date().getFullYear());
    const [month, setMonth] = useState(maxDate ? maxMonth : new Date().getMonth());
    const [monthDetails, setMonthDetails] = useState(getMonthDetails(year, month));
    const [selectedDay, setSelectedDay] = useState(
      getMaxMinSelectedDay(maxDate, minDate, monthDetails, maxDay, minDay, autoSelectToday)
    );
    const [dayDate, setDayDate] = useState(0);
    const [showMonthsDatePicker, setShowMonthsDatePicker] = useState(false);
    const [showYearsDatePicker, setShowYearsDatePicker] = useState(false);
    const [isNextMonth, setIsNextMonth] = useState(false);
    const [isPrevMonth, setIsPrevMonth] = useState(false);

    const isYearForm = isYearFormRegex.test?.(maxYear);
    const isTodayDateDisabled = getTodayTimestamp() > maxDateTimestamp || getTodayTimestamp() < minDateTimestamp;
    const nextMonthTimestamp = getNextPrevSelectedDayTimeStamp(year, month, 1);
    const prevMonthTimestamp = getNextPrevSelectedDayTimeStamp(year, month, 0);

    const nextYearTimestamp = getNextPrevYearSelectedDayTimeStamp(year, month, dayDate, 1);
    const prevYearTimestamp = getNextPrevYearSelectedDayTimeStamp(year, month, dayDate, -1);

    const getTimeStamp = (): number => {
      const toDayDate: any = monthDetails.find((day: any) => day.date === dayDate);

      return toDayDate?.timestamp;
    };

    const setNewYear = (offset: number): void => {
      const newYear = year + offset;

      if (onChange && enableAutoSelect) {
        onChange(getDateStringFromTimestamp(selectedDay, month, newYear));
      }

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

      if (onChange && enableAutoSelect) {
        onChange(getDateStringFromTimestamp(selectedDay, newMonth, newYear));
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
      const todayTimestamp = getTodayTimestamp();

      if (isTodayDateDisabled) return;

      setSelectedDay(todayTimestamp);
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
      const newDay = day.timestamp;

      if (onChange) {
        onChange(getDateStringFromTimestamp(newDay, month, year));
      }

      if (handleOpen) handleOpen(false);
      setSelectedDay(newDay);
    };

    useEffect(() => {
      if (year.toString().length !== 4) return;

      if (onChange && autoSelectToday && !isTodayDateDisabled) {
        onChange(getDateStringFromTimestamp(selectedDay, month, year));
      }
    }, [autoSelectToday]);

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
    }, [value, open]);

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
              <Styled.DatePickerDay
                isDisabled={day.timestamp > maxDateTimestamp || day.timestamp < minDateTimestamp}
                onClick={() => onDateClick(day)}
                day={day}
                isSelectedDay={selectedDay === day.timestamp}
              >
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
      <Popper
        onClick={() => handleOpen(!open)}
        anchorEl={anchorEl}
        open={open}
        popperOptions={popperOptions}
        wrapperStyles={popperWrapperStyles}
        zIndex={zIndex}
        position={position || 'bottom-start'}
        overlay
      >
        <Styled.Calendar position={position} open={open} style={{ ...calendarStyles }} {...rest} ref={ref}>
          <MonthPicker
            year={year}
            setMonth={setMonth}
            getMonthStr={getMonthStr}
            _month={month}
            getTimeStamp={getTimeStamp}
            selectedDay={selectedDay}
            onChange={onChange}
            setSelectedDay={setSelectedDay}
            enableAutoSelect={enableAutoSelect}
            currentMonth={getMonthStr(month)}
            showMonthsDatePicker={showMonthsDatePicker}
            setShowMonthsDatePicker={setShowMonthsDatePicker}
            setMonthDetails={setMonthDetails}
            getMonthDetails={getMonthDetails}
            monthDetails={monthDetails}
            maxMonth={maxMonth}
            minMonth={minMonth}
            minYear={minYear}
            maxYear={maxYear}
            maxDate={maxDate}
            value={value}
          />

          <YearPicker
            showYearsDatePicker={showYearsDatePicker}
            enableAutoSelect={enableAutoSelect}
            setShowYearsDatePicker={setShowYearsDatePicker}
            setMonthDetails={setMonthDetails}
            getMonthDetails={getMonthDetails}
            monthDetails={monthDetails}
            getTimeStamp={getTimeStamp}
            setSelectedDay={setSelectedDay}
            selectedDay={selectedDay}
            onChange={onChange}
            setYear={setYear}
            monthIndex={month}
            _year={year}
            value={value}
            maxDate={maxDate}
            minDate={minDate}
            minYear={minYear}
            maxYear={maxYear}
            maxMonth={maxMonth}
            isYearForm={isYearForm}
          />

          <Styled.HeaderWrapper>
            <Styled.HeaderLeftArrows
              isDisabled={prevYearTimestamp < minDateTimestamp || (year === minYear && month <= minMonth)}
              onClick={() => handleNextYearButton(-1, false)}
            >
              <TwoArrowsRight size={10} />
            </Styled.HeaderLeftArrows>

            <Styled.HeaderLeftArrow
              isDisabled={prevMonthTimestamp <= minDateTimestamp}
              onClick={() => handleNextMonthButton(-1, true)}
            >
              <ArrowLeftOutline size={10} />
            </Styled.HeaderLeftArrow>

            <Styled.HeaderBody>
              <Styled.HeaderBodyMonth onClick={() => setShowMonthsDatePicker(true)}>
                {getMonthStr(month)}
              </Styled.HeaderBodyMonth>
              <Styled.HeaderBodyYear onClick={() => setShowYearsDatePicker(true)}>{year}</Styled.HeaderBodyYear>
            </Styled.HeaderBody>

            <Styled.HeaderRightArrow
              isDisabled={nextMonthTimestamp >= maxDateTimestamp}
              onClick={() => handlePrevMonthButton(1, false)}
            >
              <ArrowRightOutline size={10} />
            </Styled.HeaderRightArrow>

            <Styled.HeaderRightArrows
              isDisabled={nextYearTimestamp > maxDateTimestamp || (year === maxYear && month >= maxYear)}
              onClick={() => handleNextYearButton(1, true)}
            >
              <TwoArrowsLeft size={10} />
            </Styled.HeaderRightArrows>
          </Styled.HeaderWrapper>
          <Styled.CalendarBody>{renderCalendar()}</Styled.CalendarBody>
          <Styled.ButtonWrapper>
            <Button onClick={() => handleOpen(false)} size="xs" color="basic">
              Cancel
            </Button>
            <Button onClick={handleTodayButton} size="xs" color="secondary" disabled={isTodayDateDisabled}>
              Today
            </Button>
          </Styled.ButtonWrapper>
        </Styled.Calendar>
      </Popper>
    );
  }
);

export default Calendar;
