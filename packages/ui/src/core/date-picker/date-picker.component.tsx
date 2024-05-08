import React, { useState, useRef, useEffect } from 'react';
import PT, { Validator } from 'prop-types';
import CalendarIcon from '@scaleflex/icons/calendar';
import CrossOutline from '@scaleflex/icons/cross-outline';
import type { IconProps } from '@scaleflex/icons/icon.props';

import { InputSize } from '../../utils/types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { DatePickerProps } from './date-picker.props';
import { propTypes as inputPropTypes } from '../input/input.component';
import Calendar from '../calendar';
import { propTypes as popperPropTypes } from '../popper/popper.component';
import { InputProps } from '../input';
import { isYearFormRegex } from '../calendar/calendar.utils';
import { Position } from '../popper/types';
import { InputGroupProps } from '../input-group';
import Styled from './date-picker.styles';

const Datepicker = intrinsicComponent<DatePickerProps, HTMLDivElement>(
  (
    {
      value = '',
      onChange,
      autoSelectToday,
      enableAutoSelect,
      maxDate = '',
      minDate = '',
      position,
      label,
      size = InputSize.Md,
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
    const [isHoveringInput, setIsHoveringInput] = useState(false);
    const [isHoveringPlaceholder, setIsHoveringPlaceholder] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const datePickerRef = useRef(null);

    const maxDateTimestamp = new Date(maxDate).getTime();
    const minDateTimestamp = new Date(minDate).getTime();
    const maxYear: any = new Date(inputValue).getFullYear();
    const isYearForm = isYearFormRegex.test?.(maxYear);
    const { disabled, readOnly } = rest;
    const showClearIcon = !!inputValue.length && (isHoveringInput || isFocused);

    const handleOnChange = (dateInputValue: string): void => {
      const dateInputTimestamp = new Date(dateInputValue).getTime();
      const isDisabledDate = dateInputTimestamp > maxDateTimestamp || dateInputTimestamp < minDateTimestamp;

      setInputValue(dateInputValue);
      setIsHoveringInput(false);

      if (onChange && !isDisabledDate && isYearForm) {
        onChange(dateInputValue);
      }
    };

    const handleClearIconClick = (): void => {
      if (onChange) onChange('');

      setInputValue('');
      setShowPlaceholder(true);
    };

    const handleCalendarIcon = (): void => {
      if (!disabled && !readOnly) setOpen(!open);
    };

    const handlePlaceholder = (): void => {
      if (!disabled && !readOnly) setShowPlaceholder(false);
    };

    useEffect(() => {
      if (autoSelectToday) return;
      if (!value) setInputValue('');
      else setInputValue(value);
    }, [value]);

    return (
      <Styled.DatePicker
        ref={datePickerRef}
        onMouseEnter={() => setIsHoveringInput(true)}
        onMouseLeave={() => setIsHoveringInput(false)}
      >
        <Styled.DatePickerInput
          label={label}
          fullWidth={fullWidth}
          hint={hint}
          size={size}
          showPlaceholder={setShowPlaceholder}
          value={inputValue}
          isHoveringPlaceholder={isHoveringPlaceholder}
          clearIcon={showClearIcon && ((props: IconProps) => <CrossOutline {...props} size={10} />)}
          clearIconClick={handleClearIconClick}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => handleOnChange(currentTarget.value)}
          inputProps={{
            iconEnd: () => <CalendarIcon size={size === 'md' ? 16 : 14} />,
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
            onMouseEnter={() => setIsHoveringPlaceholder(true)}
            onMouseLeave={() => setIsHoveringPlaceholder(false)}
            disabled={disabled}
            readOnly={readOnly}
            size={size}
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
          enableAutoSelect={enableAutoSelect}
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
  enableAutoSelect: false,
};

export const propTypes = {
  value: PT.string,
  position: PT.oneOf(objectValues(Position)),
  size: PT.oneOf(objectValues(InputSize)),
  maxDate: PT.string,
  minDate: PT.string,
  onChange: PT.func,
  label: PT.string,
  hint: PT.string,
  popperOptions: popperPropTypes.popperOptions,
  autoSelectToday: PT.bool,
  enableAutoSelect: PT.bool,
  fullWidth: PT.bool,
  InputProps: PT.exact(inputPropTypes) as Validator<InputProps>,
  inputGroupProps: PT.exact(inputPropTypes) as Validator<InputGroupProps>,
  calendarStyles: PT.object,
};

Datepicker.propTypes = propTypes;

export default Datepicker;
