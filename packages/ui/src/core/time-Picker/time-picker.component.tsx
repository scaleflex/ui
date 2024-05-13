import React, { useState, useRef } from 'react';
import PT, { Validator } from 'prop-types';
import Clock from '@scaleflex/icons/clock';
import { Popper } from '@scaleflex/ui/core';

import { InputSize } from '../../utils/types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { propTypes as inputPropTypes } from '../input/input.component';
import { propTypes as popperPropTypes } from '../popper/popper.component';
import { InputProps } from '../input';
import { Position } from '../popper/types';
import { TimePickerProps } from './time-picker.props';
import Styled from './time-picker.styles';

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
    }: TimePickerProps,
    ref
  ): JSX.Element => {
    const [open, setOpen] = useState(false);
    const [time, setTime] = useState('');
    const [selectedHour, setSelectedHour] = useState('00');
    const [selectedMinute, setSelectedMinute] = useState('00');
    const [selectedPeriod, setSelectedPeriod] = useState('AM');

    const timePickerRef = useRef(null);

    const toggleDropdown = (): void => {
      setOpen(!open);
    };

    const handleHourChange = (hour: number): void => {
      const hourValue = hour < 10 ? `0${hour}` : `${hour}`;
      const [hourString] = time.split(':');

      setSelectedHour(hourValue);
      setTime(`${hourString}:${selectedMinute}`);
    };

    const handleMinuteChange = (minute: number): void => {
      const minuteValue = minute < 10 ? `0${minute}` : `${minute}`;
      const [hourString] = time.split(':');

      setSelectedMinute(minuteValue);
      setTime(`${hourString}:${minuteValue}`);
    };

    const handlePeriodChange = (period: string): void => {
      const hour = period === 'PM' ? Number.parseInt(selectedHour, 10) + 12 : selectedHour;

      setTime(`${hour}:${selectedMinute}`);
      setSelectedPeriod(period);
    };

    const handleTimeChange = (event: any) => {
      const timeString = event.target.value;
      const [hourString, minuteString] = timeString.split(':');
      const hour = Number.parseInt(hourString, 10);

      setTime(timeString);
      setSelectedMinute(minuteString);

      if (hour > 12) {
        setSelectedHour(`${hour - 12 < 10 ? '0' : ''}${hour - 12}`);
        setSelectedPeriod('PM');
      } else {
        setSelectedPeriod('AM');
        setSelectedHour(hourString);
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
            iconEnd: () => <Clock size={size === 'md' ? 16 : 14} onClick={toggleDropdown} />,
            type: 'time',
            ...(InputPropsData || {}),
          }}
          {...inputGroupProps}
          ref={ref}
        />
        <Popper
          anchorEl={timePickerRef.current}
          onClick={() => toggleDropdown()}
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
                      selected={selectedHour === (hour < 10 ? `0${hour + 1}` : `${hour + 1}`)}
                      key={hour}
                      onClick={() => handleHourChange(hour + 1)}
                    >
                      {hour + 1}
                    </Styled.TimePickerHour>
                  ))}
                </Styled.TimePickerDropdownColumn>
                <Styled.TimePickerDropdownColumn>
                  {[...new Array(60).keys()].map((minute) => (
                    <Styled.TimePickerMinute
                      selected={selectedMinute === (minute < 10 ? `0${minute}` : `${minute}`)}
                      key={minute}
                      onClick={() => handleMinuteChange(minute)}
                    >
                      {minute < 10 ? `0${minute}` : minute}
                    </Styled.TimePickerMinute>
                  ))}
                </Styled.TimePickerDropdownColumn>
              </Styled.TimePickerDropdown>
              <Styled.TimePickerDropdownColumn>
                <Styled.TimePickerPeriod selected={selectedPeriod === 'AM'} onClick={() => handlePeriodChange('AM')}>
                  AM
                </Styled.TimePickerPeriod>
                <Styled.TimePickerPeriod selected={selectedPeriod === 'PM'} onClick={() => handlePeriodChange('PM')}>
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
};

TimePicker.propTypes = propTypes;

export default TimePicker;
