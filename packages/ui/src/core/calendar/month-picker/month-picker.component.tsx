import React, { useEffect, useState } from 'react';

import { MonthPickerProps } from '../calendar.props';
import { intrinsicComponent } from '../../../utils/functions';
import Styled from '../calendar.styles';
import { MONTHS_PICKER } from '../calendar.utils';

const MonthPicker = intrinsicComponent<MonthPickerProps, HTMLDivElement>(
  (
    {
      showMonthsDatePicker = false,
      setShowMonthsDatePicker,
      getMonthStr,
      currentMonth,
      setMonth,
      _month,
      year = 0,
      setSelectedDay,
      setMonthDetails,
      getMonthDetails,
      getTimeStamp,
      monthDetails,
    }: MonthPickerProps,
    ref
  ): JSX.Element => {
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);

    useEffect(() => {
      if (getTimeStamp) setSelectedDay?.(getTimeStamp());
    }, [monthDetails]);

    const handleOnClickMonth = (index: number): void => {
      setSelectedMonth?.(getMonthStr?.(index));
      setMonth?.(index);
      setShowMonthsDatePicker?.(false);
      setMonthDetails?.(getMonthDetails?.(year, index));
    };

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
