import React, { useEffect, useState } from 'react';

import { MonthPickerProps } from '../calendar.props';
import Styled from '../calendar.styles';
import { getDateStringFromTimestamp, MONTHS_PICKER } from '../calendar.utils';

const MonthPicker = ({
  showMonthsDatePicker = false,
  enableAutoSelect = false,
  setShowMonthsDatePicker,
  getMonthStr,
  currentMonth,
  setMonth,
  _month,
  year = 0,
  maxMonth = 0,
  minMonth = 0,
  minYear = 0,
  maxYear = 0,
  maxDate,
  value,
  onChange,
  selectedDay = 0,
  setSelectedDay,
  setMonthDetails,
  getMonthDetails,
  getTimeStamp,
  monthDetails,
  ref,
}: MonthPickerProps): JSX.Element => {
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const isMonthValid = maxMonth <= 12;

  useEffect(() => {
    if (getTimeStamp && enableAutoSelect) setSelectedDay?.(getTimeStamp());
  }, [monthDetails]);

  const handleOnClickMonth = (index: number): void => {
    setSelectedMonth?.(getMonthStr?.(index));
    setMonth?.(index);
    setShowMonthsDatePicker?.(false);
    setMonthDetails?.(getMonthDetails?.(year, index));

    if (onChange && enableAutoSelect) {
      onChange(getDateStringFromTimestamp(selectedDay, index, year));
    }
  };

  useEffect(() => {
    if (maxDate && maxMonth && isMonthValid && !value) {
      setMonth?.(maxMonth);
      setMonthDetails?.(getMonthDetails?.(maxYear, maxMonth));
    }
  }, []);

  const isMonthChanged = (index: number): boolean => {
    return index === _month;
  };

  return (
    <Styled.MonthDatePickerWrapper open={showMonthsDatePicker} ref={ref}>
      <Styled.HeaderWrapper>
        <Styled.HeaderBody>
          <Styled.HeaderBodyMonth onClick={() => setShowMonthsDatePicker?.(false)}>
            {selectedMonth}
          </Styled.HeaderBodyMonth>
          <Styled.HeaderBodyYear />
        </Styled.HeaderBody>
      </Styled.HeaderWrapper>

      <Styled.MonthButtonsWrapper>
        {MONTHS_PICKER.map((month, index) => (
          <Styled.MonthButtons
            onClick={() => handleOnClickMonth(index)}
            isMonthChanged={isMonthChanged(index)}
            key={month}
            isDisabled={(index > maxMonth || index < minMonth) && year === minYear}
          >
            {month}
          </Styled.MonthButtons>
        ))}
      </Styled.MonthButtonsWrapper>
    </Styled.MonthDatePickerWrapper>
  );
};

export default MonthPicker;
