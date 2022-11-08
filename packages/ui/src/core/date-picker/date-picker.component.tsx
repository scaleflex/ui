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

const Datepicker = intrinsicComponent<DatePickerProps, HTMLDivElement>(
  (
    { value, onChange, InputProps: InputPropsData, CalendarProps: CalendarPropsData, ...rest }: DatePickerProps,
    ref
  ): JSX.Element => {
    const [open, setOpen] = useState(false);
    const datePickerInputRef = useRef(null);

    const handleInputChange = (inputValue: string): void => {
      if (onChange) {
        onChange(inputValue);
      }
    };

    return (
      <Styled.DatePicker ref={ref}>
        <Styled.DatePickerInput
          label="Label"
          hint="Some hint goes here"
          value={value}
          onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) =>
            handleInputChange(currentTarget.value)
          }
          inputProps={{
            iconEnd: (props: IconProps) => <CalendarIcon {...props} />,
            iconClickEnd: () => setOpen(!open),
            type: 'date',
            ...(InputPropsData || {}),
          }}
          inputRef={datePickerInputRef}
          {...rest}
        />
        <Calendar
          value={value}
          open={open}
          setOpen={setOpen}
          onChange={onChange}
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
  onChange: PT.func,
  InputProps: PT.exact(inputPropTypes) as Validator<InputProps>,
  CalendarProps: PT.exact(calendarPropTypes) as Validator<CalendarProps>,
};

Datepicker.propTypes = propTypes;

export default Datepicker;
