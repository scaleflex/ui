import React, { useEffect, useState } from 'react';
import TwoArrowsRight from '@scaleflex/icons/two-arrows-right';
import TwoArrowsLeft from '@scaleflex/icons/two-arrows-left';

import { YearPickerProps } from '../calendar.props';
import Styled from '../calendar.styles';
import { getDateStringFromTimestamp } from '../calendar.utils';

const YearPicker = ({
  showYearsDatePicker = false,
  enableAutoSelect = false,
  setShowYearsDatePicker,
  monthIndex = 0,
  _year = 0,
  setYear,
  maxDate,
  value = '',
  setMonthDetails,
  getMonthDetails,
  setSelectedDay,
  getTimeStamp,
  selectedDay = 0,
  maxYear = 0,
  minYear = 0,
  maxMonth = 0,
  isYearForm = false,
  onChange,
  monthDetails,
  ref,
}: YearPickerProps): JSX.Element => {
  const [startYear, setStartYear] = useState(_year);
  const [endYear, setEndYear] = useState(_year + 11);

  const yearsArray = new Array(endYear - startYear + 1).fill(0).map((_, index) => startYear + index);
  const _maxMonth = maxMonth + 1;

  const isYearChanged = (year: number): boolean => {
    return year === _year;
  };

  const nextYear = (offset: number): void => {
    setStartYear(startYear + offset);
    setEndYear(endYear + offset);
  };

  const handleOnClickYear = (year: number): void => {
    if (onChange && enableAutoSelect) {
      onChange(getDateStringFromTimestamp(selectedDay, monthIndex, year));
    }

    setYear?.(year);
    setShowYearsDatePicker?.(false);
    setMonthDetails?.(getMonthDetails?.(year, monthIndex));
  };

  useEffect(() => {
    if (!yearsArray.includes(_year)) {
      setStartYear(_year);
      setEndYear(_year + 11);
    }
  }, [_year]);

  useEffect(() => {
    if (maxDate && isYearForm && _maxMonth && !value) {
      setStartYear(maxYear - 11);
      setEndYear(maxYear);
      setYear?.(maxYear);
      setMonthDetails?.(getMonthDetails?.(maxYear, maxMonth));
    }
  }, []);

  useEffect(() => {
    if (getTimeStamp && enableAutoSelect) setSelectedDay?.(getTimeStamp());
  }, [monthDetails]);

  return (
    <Styled.MonthDatePickerWrapper open={showYearsDatePicker} ref={ref}>
      <Styled.HeaderWrapper>
        <Styled.MonthsHeaderLeftArrow isDisabled={startYear <= minYear} onClick={() => nextYear(-10)}>
          <TwoArrowsRight size={10} />
        </Styled.MonthsHeaderLeftArrow>

        <Styled.YearsHeaderBody
          onClick={() => setShowYearsDatePicker?.(false)}
        >{`${startYear} - ${endYear}`}</Styled.YearsHeaderBody>

        <Styled.MonthsHeaderRightArrow isDisabled={endYear >= maxYear}>
          <TwoArrowsLeft size={10} onClick={() => nextYear(10)} />
        </Styled.MonthsHeaderRightArrow>
      </Styled.HeaderWrapper>

      <Styled.MonthButtonsWrapper>
        {yearsArray.map((year) => (
          <Styled.MonthButtons
            isDisabled={year > maxYear || year < minYear}
            key={year}
            isYearChanged={isYearChanged(year)}
            onClick={() => handleOnClickYear(year)}
          >
            {year}
          </Styled.MonthButtons>
        ))}
      </Styled.MonthButtonsWrapper>
    </Styled.MonthDatePickerWrapper>
  );
};

export default YearPicker;
