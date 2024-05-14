import React, { useState, useRef } from 'react';
import PT, { Validator } from 'prop-types';
import Clock from '@scaleflex/icons/clock';

import { InputSize } from '../../utils/types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { propTypes as inputPropTypes } from '../input/input.component';
import Popper, { propTypes as popperPropTypes } from '../popper/popper.component';
import { InputProps } from '../input';
import { Position } from '../popper/types';
import { TimePickerProps } from './time-picker.props';
import Styled from './time-picker.styles';

const AM = 'AM';
const PM = 'PM';

const TimePicker = intrinsicComponent<TimePickerProps, HTMLDivElement>(
  (
    {
      position,
      size = InputSize.Md,
      popperOptions,
      InputProps: InputPropsData,
      readOnly = true,
      fullWidth,
      inputGroupProps,
      hint,
      label,
      onChange,
      ...rest
    }: TimePickerProps,
    ref
  ): JSX.Element => {
    const [open, setOpen] = useState(false);
    const [time, setTime] = useState('');
    const [selectedHour, setSelectedHour] = useState('01');
    const [selectedMinute, setSelectedMinute] = useState('00');
    const [selectedPeriod, setSelectedPeriod] = useState(AM);

    const timePickerRef = useRef(null);

    const getFormattedHour = (hour: number) => (hour < 10 ? `0${hour}` : `${hour}`);
    const getFormattedMinute = (minute: number) => (minute < 10 ? `0${minute}` : `${minute}`);

    const toggleDropdown = (): void => {
      setOpen(!open);
    };

    const handleHourChange = (hour: number, event: any): void => {
      const formattedHour = getFormattedHour(hour);
      const [hourString] = time.split(':');
      let hourValue = formattedHour;

      if (Number.parseInt(hourString, 10) > 10) {
        hourValue = `${hour + 12}`;
      }

      const updatedTime = `${hourValue}:${selectedMinute}`;
      setSelectedHour(formattedHour);
      setTime(updatedTime);

      if (typeof onChange === 'function') {
        onChange(event, updatedTime);
      }
    };

    const handleMinuteChange = (minute: number, event: any): void => {
      const formattedMinute = getFormattedMinute(minute);
      const [hourString] = time.split(':');
      const updatedHour = hourString || selectedHour;
      const updatedTime = `${updatedHour}:${formattedMinute}`;

      setSelectedMinute(formattedMinute);
      setTime(updatedTime);

      if (typeof onChange === 'function') {
        onChange(event, updatedTime);
      }
    };

    const handlePeriodChange = (period: string, event: any): void => {
      const hour = period === PM ? Number.parseInt(selectedHour, 10) + 12 : selectedHour;
      const updatedTime = `${hour}:${selectedMinute}`;

      setTime(updatedTime);
      setSelectedPeriod(period);

      if (typeof onChange === 'function') {
        onChange(event, updatedTime);
      }
    };

    const handleTimeChange = (event: any) => {
      const timeString = event.target.value;
      const [hourString, minuteString] = timeString.split(':');
      const hour = Number.parseInt(hourString, 10);

      setTime(timeString);
      setSelectedMinute(minuteString);

      if (hour > 12) {
        setSelectedHour(`${hour - 12 < 10 ? '0' : ''}${hour - 12}`);
        setSelectedPeriod(PM);
      } else {
        setSelectedPeriod(AM);
        setSelectedHour(hourString);
      }

      if (typeof onChange === 'function') {
        onChange(event, time);
      }
    };

    return (
      <Styled.TimePicker ref={timePickerRef} fullWidth={fullWidth}>
        <Styled.TimePickerInput
          label={label}
          fullWidth={fullWidth}
          hint={hint}
          size={size}
          value={time}
          onChange={handleTimeChange}
          readOnly={readOnly}
          hideCopyIcon
          inputProps={{
            iconEnd: () => (
              <Styled.TimePickerIconButton size={size} color="basic">
                <Clock size={size === 'md' ? 16 : 14} />
              </Styled.TimePickerIconButton>
            ),
            iconClickEnd: toggleDropdown,
            type: 'time',
            ...(InputPropsData || {}),
          }}
          {...inputGroupProps}
          ref={ref}
          {...rest}
        />
        <Popper
          anchorEl={timePickerRef.current}
          onClick={toggleDropdown}
          open={open}
          popperOptions={popperOptions}
          position={position || 'bottom-start'}
          overlay
        >
          {open && (
            <Styled.TimePickerDropdownContainer>
              <Styled.TimePickerDropdown>
                <Styled.TimePickerDropdownColumn>
                  {[...new Array(12).keys()].map((hour) => (
                    <Styled.TimePickerHour
                      selected={selectedHour === getFormattedHour(hour + 1)}
                      key={hour}
                      onClick={(event) => handleHourChange(hour + 1, event)}
                    >
                      {hour + 1}
                    </Styled.TimePickerHour>
                  ))}
                </Styled.TimePickerDropdownColumn>
                <Styled.TimePickerDropdownColumn>
                  {[...new Array(60).keys()].map((minute) => (
                    <Styled.TimePickerMinute
                      selected={selectedMinute === getFormattedMinute(minute)}
                      key={minute}
                      onClick={(event) => handleMinuteChange(minute, event)}
                    >
                      {getFormattedMinute(minute)}
                    </Styled.TimePickerMinute>
                  ))}
                </Styled.TimePickerDropdownColumn>
              </Styled.TimePickerDropdown>
              <Styled.TimePickerDropdownColumn>
                <Styled.TimePickerPeriod
                  selected={selectedPeriod === AM}
                  onClick={(event) => handlePeriodChange(AM, event)}
                >
                  AM
                </Styled.TimePickerPeriod>
                <Styled.TimePickerPeriod
                  selected={selectedPeriod === PM}
                  onClick={(event) => handlePeriodChange(PM, event)}
                >
                  PM
                </Styled.TimePickerPeriod>
              </Styled.TimePickerDropdownColumn>
            </Styled.TimePickerDropdownContainer>
          )}
        </Popper>
      </Styled.TimePicker>
    );
  }
);

TimePicker.defaultProps = {
  size: InputSize.Md,
  disabled: false,
  readOnly: true,
  fullWidth: false,
};

export const propTypes = {
  position: PT.oneOf(objectValues(Position)),
  size: PT.oneOf(objectValues(InputSize)),
  popperOptions: popperPropTypes.popperOptions,
  InputProps: PT.exact(inputPropTypes) as Validator<InputProps>,
  fullWidth: PT.bool,
  onChange: PT.func,
};

TimePicker.propTypes = propTypes;

export default TimePicker;
