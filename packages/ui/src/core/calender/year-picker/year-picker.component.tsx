import React, { useEffect, useState } from 'react';
import TwoArrowsRight from '@scaleflex/icons/two-arrows-right';
import TwoArrowsLeft from '@scaleflex/icons/two-arrows-left';

import { CalendarProps } from '../calendar.props';
import { intrinsicComponent } from '../../../utils/functions';
import Styled from '../calendar.styles';

const YearPicker = intrinsicComponent<CalendarProps, HTMLDivElement>(
  (
    {
      showYearsDatePicker = false,
      setShowYearsDatePicker,
      monthIndex = 0,
      _year = 0,
      setYear,
      setMonthDetails,
      getMonthDetails,
      setSelectedDay,
      getTimeStamp,
      monthDetails,
    }: CalendarProps,
    ref
  ): JSX.Element => {
    const [startYear, setStartYear] = useState(_year);
    const [endYear, setEndYear] = useState(_year + 11);

    const yearsArray = new Array(endYear - startYear + 1).fill(0).map((_, index) => startYear + index);

    const isYearChanged = (year: number): boolean => {
      return year === _year;
    };

    const nextYear = (offset: number): void => {
      setStartYear(startYear + offset);
      setEndYear(endYear + offset);
    };

    const handleOnClickYear = (year: number): void => {
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
      if (getTimeStamp) setSelectedDay?.(getTimeStamp());
    }, [monthDetails]);

    return (
      <Styled.MonthDatePickerWrapper open={showYearsDatePicker} ref={ref}>
        <Styled.HeaderWrapper>
          <Styled.MonthsHeaderLeftArrow onClick={() => nextYear(-10)}>
            <TwoArrowsRight size={10} />
          </Styled.MonthsHeaderLeftArrow>

          <Styled.YearsHeaderBody
            onClick={() => setShowYearsDatePicker?.(false)}
          >{`${startYear} - ${endYear}`}</Styled.YearsHeaderBody>

          <Styled.MonthsHeaderRightArrow>
            <TwoArrowsLeft size={10} onClick={() => nextYear(10)} />
          </Styled.MonthsHeaderRightArrow>
        </Styled.HeaderWrapper>

        <Styled.MonthButtonsWrapper>
          {yearsArray.map((year) => (
            <Styled.MonthButtons key={year} isYearChanged={isYearChanged(year)} onClick={() => handleOnClickYear(year)}>
              {year}
            </Styled.MonthButtons>
          ))}
        </Styled.MonthButtonsWrapper>
      </Styled.MonthDatePickerWrapper>
    );
  }
);

export default YearPicker;
