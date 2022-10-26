import React, { useState } from 'react';

import { CalendarProps } from '../calendar.props';
import { intrinsicComponent } from '../../../utils/functions';
import Styled from '../calendar.styles';
import { MONTHS_PICKER } from '../calendar.utils';

const MonthPicker = intrinsicComponent<CalendarProps, HTMLDivElement>(
  (
    {
      showMonthsDatePicker = false,
      setShowMonthsDatePicker,
      getMonthStr,
      currentMonth,
      setMonth,
      year = 0,
      setMonthDetails,
      getMonthDetails,
    }: CalendarProps,
    ref
  ): JSX.Element => {
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);
    const [selectedMonthIndex, setSelectedMonthIndex] = useState(currentMonth);

    const handleOnClickMonth = (index: number): void => {
      setSelectedMonth?.(getMonthStr?.(index));
      setMonth?.(index);
      setSelectedMonthIndex(index);
      setShowMonthsDatePicker?.(false);
      setMonthDetails?.(getMonthDetails?.(year, index));
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
              isMonthSelected={index === selectedMonthIndex}
              onClick={() => handleOnClickMonth(index)}
              key={month}
            >
              {month}
            </Styled.MonthButtons>
          ))}
        </Styled.MonthButtonsWrapper>
      </Styled.MonthDatePickerWrapper>
    );
  }
);

export default MonthPicker;
