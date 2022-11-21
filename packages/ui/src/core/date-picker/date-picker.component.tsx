import React, { useState, useRef } from 'react';
import PT, { Validator } from 'prop-types';
import CalendarIcon from '@scaleflex/icons/calendar';
import type { IconProps } from '@scaleflex/icons/icon.props';

import { intrinsicComponent } from '../../utils/functions';
import { DatePickerProps } from './date-picker.props';
import { propTypes as inputPropTypes } from '../input/input.component';
import Calendar, { CalendarProps } from '../calendar';
import { propTypes as calendarPropTypes } from '../calendar/calendar.component';

import Styled from './date-picker.styles';
import { InputProps } from '../input';
import { isYearFormRegex } from '../calendar/calendar.utils';

const Datepicker = intrinsicComponent<DatePickerProps, HTMLDivElement>(
  (
    {
      value = '',
      onChange,
      autoSelectToday,
      maxDate = '',
      minDate = '',
      InputProps: InputPropsData,
      CalendarProps: CalendarPropsData,
      ...rest
    }: DatePickerProps,
    ref
  ): JSX.Element => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const [isHovering, setIsHovering] = useState(false);

    const datePickerInputRef = useRef(null);

    const maxDateTimestamp = new Date(maxDate).getTime();
    const minDateTimestamp = new Date(minDate).getTime();
    const maxYear: any = new Date(inputValue).getFullYear();
    const isYearForm = isYearFormRegex.test?.(maxYear);

    const handleOnChange = (dateInputValue: string): void => {
      const dateInputTimestamp = new Date(dateInputValue).getTime();
      const isDisabledDate = dateInputTimestamp >= maxDateTimestamp || dateInputTimestamp <= minDateTimestamp;

      setInputValue(dateInputValue);

      if (onChange && !isDisabledDate && isYearForm) {
        onChange(dateInputValue);
      }
    };

    return (
      <Styled.DatePicker ref={ref}>
        <Styled.DatePickerInput
          label="Label"
          hint="Some hint goes here"
          showPlaceholder={setShowPlaceholder}
          value={inputValue}
          isHovering={isHovering}
          onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => handleOnChange(currentTarget.value)}
          inputProps={{
            iconEnd: (props: IconProps) => <CalendarIcon {...props} />,
            iconClickEnd: () => setOpen(!open),
            type: 'date',
            ...(InputPropsData || {}),
          }}
          inputRef={datePickerInputRef}
          {...rest}
        />
        {!inputValue && rest.placeholder && showPlaceholder && (
          <Styled.Placeholder
            onClick={() => setShowPlaceholder(false)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            {...rest}
          >
            {rest.placeholder}
          </Styled.Placeholder>
        )}
        <Calendar
          value={inputValue}
          open={open}
          setOpen={setOpen}
          onChange={handleOnChange}
          maxDate={maxDate}
          minDate={minDate}
          autoSelectToday={autoSelectToday}
          anchorEl={datePickerInputRef.current}
          {...CalendarPropsData}
        />
      </Styled.DatePicker>
    );
  }
);

Datepicker.defaultProps = {};

export const propTypes = {
  value: PT.string,
  maxDate: PT.string,
  minDate: PT.string,
  onChange: PT.func,
  autoSelectToday: PT.bool,
  InputProps: PT.exact(inputPropTypes) as Validator<InputProps>,
  CalendarProps: PT.exact(calendarPropTypes) as Validator<CalendarProps>,
};

Datepicker.propTypes = propTypes;

export default Datepicker;
