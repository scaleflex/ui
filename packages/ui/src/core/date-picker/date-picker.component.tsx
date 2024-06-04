import React, { useState, useRef, useEffect } from 'react';
import CalendarIcon from '@scaleflex/icons/calendar';
import CrossOutline from '@scaleflex/icons/cross-outline';
import type { IconProps } from '@scaleflex/icons/icon.props';

import { InputSize } from '../../utils/types';
import { intrinsicComponent } from '../../utils/functions';
import { DatePickerProps } from './date-picker.props';
import { isYearFormRegex } from '../calendar/calendar.utils';
import Calendar from '../calendar';

import Styled from './date-picker.styles';

const Datepicker = intrinsicComponent<DatePickerProps, HTMLDivElement>(
  (
    {
      value = '',
      onChange,
      autoSelectToday,
      enableAutoSelect = false,
      maxDate = '',
      minDate = '',
      position,
      label,
      size = InputSize.Md,
      hint,
      popperOptions,
      zIndex = 1300,
      InputProps: InputPropsData,
      calendarStyles = {},
      popperWrapperStyles = {},
      inputGroupProps,
      fullWidth,
      placeholder,
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
      const isDisabledDate = dateInputTimestamp > maxDateTimestamp || dateInputTimestamp < minDateTimestamp;

      setInputValue(dateInputValue);

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
      <Styled.DatePicker ref={datePickerRef}>
        <Styled.DatePickerInput
          label={label}
          fullWidth={fullWidth}
          hint={hint}
          size={size}
          showPlaceholder={setShowPlaceholder}
          value={inputValue}
          $isHovering={isHovering}
          clearIcon={!!inputValue.length && ((props: IconProps) => <CrossOutline {...props} size={10} />)}
          clearIconClick={handleClearIconClick}
          onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => handleOnChange(currentTarget.value)}
          inputProps={{
            iconEnd: () => (
              <Styled.DatePickerIconButton size={size} color="basic">
                <CalendarIcon size={size === 'md' ? 16 : 14} />
              </Styled.DatePickerIconButton>
            ),
            iconClickEnd: handleCalendarIcon,
            type: 'date',
            max: '9999-12-31',
            ...(InputPropsData || {}),
          }}
          ref={ref}
          {...inputGroupProps}
          {...rest}
        />
        {!inputValue && placeholder && showPlaceholder && (
          <Styled.Placeholder
            onClick={handlePlaceholder}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            disabled={disabled}
            readOnly={readOnly}
            size={size}
          >
            {placeholder}
          </Styled.Placeholder>
        )}
        <Calendar
          value={inputValue}
          open={open}
          setOpen={setOpen}
          onChange={handleOnChange}
          maxDate={maxDate}
          minDate={minDate}
          zIndex={zIndex}
          autoSelectToday={autoSelectToday}
          enableAutoSelect={enableAutoSelect}
          anchorEl={datePickerRef.current}
          position={position || 'bottom-start'}
          popperOptions={popperOptions}
          calendarStyles={calendarStyles}
          popperWrapperStyles={popperWrapperStyles}
        />
      </Styled.DatePicker>
    );
  }
);

export default Datepicker;
