import React, { useState, useRef } from 'react';
import PT, { Validator } from 'prop-types';
import CalendarIcon from '@scaleflex/icons/calendar';
import type { IconProps } from '@scaleflex/icons/icon.props';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import { DatePickerProps } from './date-picker.props';
import { propTypes as inputPropTypes } from '../input/input.component';
import Calendar from '../calendar';
import { propTypes as popperPropTypes } from '../popper/popper.component';

import Styled from './date-picker.styles';
import { InputProps } from '../input';
import { isYearFormRegex } from '../calendar/calendar.utils';
import { Position } from '../popper/types';
import { InputGroupProps } from '../input-group';

const Datepicker = intrinsicComponent<DatePickerProps, HTMLDivElement>(
  (
    {
      value = '',
      onChange,
      autoSelectToday,
      maxDate = '',
      minDate = '',
      position,
      label,
      hint,
      popperOptions,
      InputProps: InputPropsData,
      calendarStyles,
      inputGroupProps,
      fullWidth,
      ...rest
    }: DatePickerProps,
    ref
  ): JSX.Element => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const [isHovering, setIsHovering] = useState(false);

    const datePickerRef = useRef(null);

    const maxDateTimestamp = new Date(maxDate).getTime();
    const minDateTimestamp = new Date(minDate).getTime();
    const maxYear: any = new Date(inputValue).getFullYear();
    const isYearForm = isYearFormRegex.test?.(maxYear);
    const { disabled, readOnly } = rest;

    const handleOnChange = (dateInputValue: string): void => {
      const dateInputTimestamp = new Date(dateInputValue).getTime();
      const isDisabledDate = dateInputTimestamp >= maxDateTimestamp || dateInputTimestamp <= minDateTimestamp;

      setInputValue(dateInputValue);

      if (onChange && !isDisabledDate && isYearForm) {
        onChange(dateInputValue);
      }
    };

    const handleCalendarIcon = (): void => {
      if (!disabled && !readOnly) setOpen(!open);
    };

    const handlePlaceholder = (): void => {
      if (!disabled && !readOnly) setShowPlaceholder(false);
    };

    return (
      <Styled.DatePicker ref={datePickerRef}>
        <Styled.DatePickerInput
          label={label}
          fullWidth={fullWidth}
          hint={hint}
          showPlaceholder={setShowPlaceholder}
          value={inputValue}
          isHovering={isHovering}
          onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => handleOnChange(currentTarget.value)}
          inputProps={{
            iconEnd: (props: IconProps) => <CalendarIcon {...props} />,
            iconClickEnd: handleCalendarIcon,
            type: 'date',
            max: '9999-12-31',
            ...(InputPropsData || {}),
          }}
          ref={ref}
          {...inputGroupProps}
          {...rest}
        />
        {!inputValue && rest.placeholder && showPlaceholder && (
          <Styled.Placeholder
            onClick={handlePlaceholder}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            disabled={disabled}
            readOnly={readOnly}
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
          anchorEl={datePickerRef.current}
          position={position || 'bottom-start'}
          popperOptions={popperOptions}
          calendarStyles={calendarStyles}
        />
      </Styled.DatePicker>
    );
  }
);

Datepicker.defaultProps = {
  calendarStyles: {},
};

export const propTypes = {
  value: PT.string,
  position: PT.oneOf(objectValues(Position)),
  maxDate: PT.string,
  minDate: PT.string,
  onChange: PT.func,
  label: PT.string,
  hint: PT.string,
  popperOptions: popperPropTypes.popperOptions,
  autoSelectToday: PT.bool,
  fullWidth: PT.bool,
  InputProps: PT.exact(inputPropTypes) as Validator<InputProps>,
  inputGroupProps: PT.exact(inputPropTypes) as Validator<InputGroupProps>,
  calendarStyles: PT.object,
};

Datepicker.propTypes = propTypes;

export default Datepicker;
